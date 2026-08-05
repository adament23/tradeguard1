import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { Trade } from "@/types/trade";


interface EquityCurveProps {
  startingBalance: number;
  trades: Trade[];
}


function generateEquityData(
  startingBalance: number,
  trades: Trade[]
) {

  let balance = startingBalance;


  return [
    {
      date: "Start",
      balance,
    },

    ...trades.map((trade)=>{

      balance += trade.pnl;

      return {
        date: trade.date,
        balance,
        pnl: trade.pnl,
        asset: trade.asset,
      };

    }),
  ];
}



function currency(value:number){

  return new Intl.NumberFormat(
    "en-US",
    {
      style:"currency",
      currency:"USD",
      maximumFractionDigits:0,
    }
  ).format(value);

}




function CustomTooltip({
  active,
  payload,
}:any){

  if(!active || !payload?.length)
    return null;


  const data =
    payload[0].payload;


  return (

    <div
      className="
        rounded-xl
        border
        bg-background
        p-4
        shadow-xl
      "
    >

      <p
        className="
          text-xs
          text-muted-foreground
        "
      >
        {data.date}
      </p>


      <p
        className="
          mt-1
          text-xl
          font-bold
        "
      >
        {currency(data.balance)}
      </p>


      {data.pnl && (

        <p
          className={
            data.pnl > 0
            ? "text-green-600"
            : "text-red-600"
          }
        >
          {data.pnl > 0 ? "+" : ""}
          {currency(data.pnl)}
        </p>

      )}


      {data.asset && (

        <p className="text-sm mt-1">
          {data.asset}
        </p>

      )}

    </div>

  );
}





export default function EquityCurve({

  startingBalance,
  trades,

}:EquityCurveProps){


  const data =
    generateEquityData(
      startingBalance,
      trades
    );


  const currentBalance =
    data[data.length-1].balance;


  const profit =
    currentBalance - startingBalance;


  const profitPercent =
    (
      profit / startingBalance
    ) * 100;



  const positive =
    profit >=0;



  return (

    <Card
      className="
        rounded-2xl
        border
        shadow-sm
      "
    >


      <CardHeader>


        <div
          className="
            flex
            items-center
            justify-between
          "
        >

          <div>

            <CardTitle
              className="
                text-xl
              "
            >
              Equity Curve
            </CardTitle>


            <p
              className="
                text-sm
                text-muted-foreground
              "
            >
              Account performance over time
            </p>

          </div>



          <Badge
            className={
              positive
              ?
              "bg-green-100 text-green-700"
              :
              "bg-red-100 text-red-700"
            }
          >

            {
              positive
              ?
              <TrendingUp className="mr-1 h-4 w-4"/>
              :
              <TrendingDown className="mr-1 h-4 w-4"/>
            }


            {profitPercent.toFixed(2)}%

          </Badge>


        </div>



        <div
          className="
            mt-5
            grid
            grid-cols-2
            gap-4
          "
        >

          <div
            className="
              rounded-xl
              bg-muted/40
              p-3
            "
          >

            <p className="text-sm text-muted-foreground">
              Starting Equity
            </p>

            <p className="text-lg font-semibold">
              {currency(startingBalance)}
            </p>

          </div>



          <div
            className="
              rounded-xl
              bg-muted/40
              p-3
            "
          >

            <p className="text-sm text-muted-foreground">
              Current Equity
            </p>

            <p className="text-lg font-semibold">
              {currency(currentBalance)}
            </p>

          </div>


        </div>


      </CardHeader>





      <CardContent>


        <div
          className="
            h-[420px]
            w-full
          "
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={data}
            >


              <defs>

                <linearGradient
                  id="equityFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopOpacity={0.35}
                  />

                  <stop
                    offset="95%"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>



              <CartesianGrid
                strokeDasharray="4 4"
              />


              <XAxis
                dataKey="date"
              />


              <YAxis
                tickFormatter={(value)=>
                  `$${value/1000}k`
                }
              />


              <Tooltip
                content={<CustomTooltip/>}
              />


              <Area
                type="monotone"
                dataKey="balance"
                strokeWidth={3}
                fill="url(#equityFill)"
              />


            </AreaChart>


          </ResponsiveContainer>


        </div>


      </CardContent>


    </Card>

  );
}