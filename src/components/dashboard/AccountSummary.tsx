import {
  Wallet,
  DollarSign,
  TrendingUp,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


interface AccountSummaryProps {
  startingBalance: number;
  currentBalance: number;
  totalPnL: number;
  maxDrawdown: number;
}


function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}



export default function AccountSummary({
  startingBalance,
  currentBalance,
  totalPnL,
  maxDrawdown,

}: AccountSummaryProps) {


  const balanceGrowth =
    ((currentBalance - startingBalance) /
      startingBalance) *
    100;


  const isProfit = totalPnL >= 0;



  const cards = [
    {
      title: "Starting Balance",
      value: startingBalance,
      icon: Wallet,
      subtitle: "Initial capital",
      iconStyle:
        "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },

    {
      title: "Current Balance",
      value: currentBalance,
      icon: DollarSign,
      subtitle: `${balanceGrowth.toFixed(2)}% account growth`,
      iconStyle:
        "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    },

    {
      title: "Total P&L",
      value: totalPnL,
      icon: TrendingUp,
      subtitle: "Trading performance",
      iconStyle:
        "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
    },

    {
      title: "Maximum Drawdown",
      value: maxDrawdown,
      icon: ShieldAlert,
      subtitle: "Risk protection limit",
      iconStyle:
        "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    },
  ];



  return (
    <section className="space-y-5">

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-semibold">
            Account Summary
          </h2>

          <p className="text-sm text-muted-foreground">
            Overview of your trading account
          </p>
        </div>


        <Badge
          variant="outline"
          className={
            isProfit
              ? "border-green-200 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400"
              : "border-red-200 bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400"
          }
        >
          {isProfit ? (
            <ArrowUpRight className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDownRight className="mr-1 h-4 w-4" />
          )}

          {isProfit ? "Profitable" : "Loss"}
        </Badge>


      </div>



      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;


          return (

            <Card
              key={card.title}
              className="
                group
                relative
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
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


              <CardHeader className="flex flex-row items-center justify-between">


                <CardTitle className="text-sm text-muted-foreground">
                  {card.title}
                </CardTitle>


                <div
                  className={`
                    rounded-xl
                    p-3
                    ${card.iconStyle}
                    transition-transform
                    group-hover:scale-110
                  `}
                >

                  <Icon className="h-5 w-5" />

                </div>


              </CardHeader>



              <CardContent>

                <p className="text-3xl font-bold tracking-tight">
                  {formatCurrency(card.value)}
                </p>


                <p className="mt-2 text-sm text-muted-foreground">
                  {card.subtitle}
                </p>


              </CardContent>


            </Card>

          );

        })}


      </div>


    </section>
  );
}