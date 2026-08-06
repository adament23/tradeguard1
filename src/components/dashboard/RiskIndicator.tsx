import {
  AlertTriangle,
  CalendarDays,
  ShieldAlert,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardCard } from "@/components/dashboard/dashboard-card";

interface RiskIndicatorProps {
  currentDrawdown: number;
  remainingDrawdown: number;
  maxDrawdown: number;
  currentDayLoss: number;
  remainingDailyLoss: number;
  dailyLossLimit: number;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getStatus(used: number, limit: number) {
  const percentage = (used / limit) * 100;

  if (percentage >= 90) {
    return {
      label: "At Risk",
      className:
        "bg-red-100 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-400",
      icon: ShieldAlert,
    };
  }

  if (percentage >= 70) {
    return {
      label: "Approaching Limit",
      className:
        "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-400",
      icon: AlertTriangle,
    };
  }

  return {
    label: "Safe",
    className:
      "bg-green-100 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-400",
    icon: ShieldCheck,
  };
}

function RiskCard({
  title,
  icon: Icon,
  used,
  remaining,
  limit,
  iconColor,
}: {
  title: string;
  icon: React.ElementType;
  used: number;
  remaining: number;
  limit: number;
  iconColor: string;
}) {
  const percentage = Math.min((used / limit) * 100, 100);

  const status = getStatus(used, limit);
  const StatusIcon = status.icon;

  return (
    <DashboardCard>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`
              rounded-xl
              p-3
              ${iconColor}
              transition-transform
              group-hover:scale-110
            `}
          >
            <Icon className="h-6 w-6" />
          </div>

          <CardTitle>{title}</CardTitle>
        </div>

        <Badge
          variant="outline"
          className={status.className}
        >
          <StatusIcon className="mr-1 h-4 w-4" />
          {status.label}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              Used
            </p>

            <p className="text-3xl font-bold">
              {formatCurrency(used)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Remaining
            </p>

            <p className="text-3xl font-bold">
              {formatCurrency(remaining)}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Risk Usage</span>

            <span className="font-semibold">
              {percentage.toFixed(1)}%
            </span>
          </div>

          <Progress value={percentage} />
        </div>

        <div className="rounded-lg bg-muted/50 p-3 flex justify-between text-sm">
          <span className="text-muted-foreground">
            Maximum Allowed
          </span>

          <span className="font-semibold">
            {formatCurrency(limit)}
          </span>
        </div>
      </CardContent>
    </DashboardCard>
  );
}

export default function RiskIndicator({
  currentDrawdown,
  remainingDrawdown,
  maxDrawdown,
  currentDayLoss,
  remainingDailyLoss,
  dailyLossLimit,
}: RiskIndicatorProps) {
  const overallRisk = Math.max(
    (currentDrawdown / maxDrawdown) * 100,
    (currentDayLoss / dailyLossLimit) * 100
  );

  const overallStatus = getStatus(overallRisk, 100);

  return (
    <section className="space-y-5">
      <div className="rounded-xl border bg-card p-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Risk Monitor
          </h2>

          <p className="text-sm text-muted-foreground">
            Account rule protection status
          </p>
        </div>

        <Badge
          variant="outline"
          className={`
            px-4
            py-2
            text-sm
            ${overallStatus.className}
          `}
        >
          {overallStatus.label}
        </Badge>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <RiskCard
          title="Maximum Drawdown"
          icon={TrendingDown}
          used={currentDrawdown}
          remaining={remainingDrawdown}
          limit={maxDrawdown}
          iconColor="bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400"
        />

        <RiskCard
          title="Daily Loss Limit"
          icon={CalendarDays}
          used={currentDayLoss}
          remaining={remainingDailyLoss}
          limit={dailyLossLimit}
          iconColor="bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400"
        />
      </div>
    </section>
  );
}