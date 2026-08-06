import { useState } from "react";

import type { Trade } from "@/types/trade";

import TradeFilter from "./TradeFilter";
import TradeTable from "./TradeTable";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";


interface TradeHistoryProps {
  trades: Trade[];
}


export default function TradeHistory({
  trades,
}: TradeHistoryProps) {

  const [asset, setAsset] = useState("All");


  const filteredTrades =
    asset === "All"
      ? trades
      : trades.filter(
          (trade) =>
            trade.asset === asset
        );


  return (
    <section className="space-y-5">


      {/* Heading */}

      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <div>

          <h2
            className="
              text-2xl
              font-semibold
            "
          >
            Trade History
          </h2>


          <p
            className="
              mt-1
              text-sm
              text-muted-foreground
            "
          >
            Review executed trades and analyze trading performance
          </p>

        </div>



        <Badge
          variant="outline"
          className="
            px-3
            py-1
          "
        >
          {filteredTrades.length} Trades
        </Badge>


      </div>




      {/* Content */}

      <Card
        className="
          border
          shadow-sm
          transition-all
          duration-300
          hover:shadow-xl
        "
      >

        <CardContent
          className="
            space-y-6
            p-6
          "
        >


          {/* Filter */}

          <div
            className="
              rounded-xl
              border
              bg-muted/30
              p-4
            "
          >

            <TradeFilter
              selectedAsset={asset}
              onAssetChange={setAsset}
            />

          </div>




          {/* Table */}

          <div
            className="
              overflow-hidden
              rounded-xl
              border
            "
          >

            <TradeTable
              trades={filteredTrades}
            />

          </div>


        </CardContent>

      </Card>


    </section>
  );
}