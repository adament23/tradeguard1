import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <Card
      className={cn(
        `
        group
        relative
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        `,
        className
      )}
    >
      <div
        className="
        absolute
        inset-x-0
        top-0
        h-1
        bg-gradient-to-r
        from-primary
        to-primary/20
        "
      />

      {children}
    </Card>
  );
}