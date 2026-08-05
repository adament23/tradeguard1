import {
  Trophy,
  Target,
  TrendingUp,
  TrendingDown,
  Percent,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


interface TradingStatsProps {
  winningTrades: number;
  losingTrades: number;
  winRate: number;
  largestWin: number;
  largestLoss: number;
}



function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}



export default function TradingStats({
  winningTrades,
  losingTrades,
  winRate,
  largestWin,
  largestLoss,

}: TradingStatsProps) {


  const totalTrades =
    winningTrades + losingTrades;


  const cards = [
    {
      title: "Winning Trades",
      value: winningTrades,
      icon: Trophy,
      subtitle: `${totalTrades} total trades`,
      style:
        "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
    },

    {
      title: "Losing Trades",
      value: losingTrades,
      icon: TrendingDown,
      subtitle: "Trades below entry",
      style:
        "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400",
    },


    {
      title: "Win Rate",
      value: `${winRate.toFixed(1)}%`,
      icon: Percent,
      subtitle: "Trade accuracy",
      style:
        "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    },


    {
      title: "Largest Winner",
      value: formatCurrency(largestWin),
      icon: TrendingUp,
      subtitle: "Best performing trade",
      style:
        "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400",
    },


    {
      title: "Largest Loser",
      value: formatCurrency(largestLoss),
      icon: Target,
      subtitle: "Worst performing trade",
      style:
        "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    },
  ];



  return (

    <section className="space-y-5">


      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-semibold">
             Performance Metrics
          </h2>


          <p className="text-sm text-muted-foreground">
            Performance analysis from executed trades
          </p>

        </div>



        <Badge
          variant="outline"
          className="
            border-green-200
            bg-green-50
            text-green-700
            dark:bg-green-950
            dark:text-green-400
          "
        >
          <TrendingUp className="mr-1 h-4 w-4" />
          Active Trader
        </Badge>


      </div>




      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">


        {cards.map((card) => {

          const Icon = card.icon;


          return (

            <Card
              key={card.title}
              className="
                group
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >


              <CardHeader
                className="
                  flex
                  flex-row
                  items-center
                  justify-between
                "
              >


                <CardTitle
                  className="
                    text-sm
                    text-muted-foreground
                  "
                >
                  {card.title}
                </CardTitle>



                <div
                  className={`
                    rounded-xl
                    p-3
                    ${card.style}
                    transition-transform
                    group-hover:scale-110
                  `}
                >

                  <Icon className="h-5 w-5" />

                </div>


              </CardHeader>




              <CardContent>


                <p className="text-3xl font-bold">
                  {card.value}
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