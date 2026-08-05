import type { Trade } from "@/types/trade";

import TradeFilter from "./TradeFilter";
import TradeTable from "./TradeTable";

import { useState } from "react";

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
          (trade) => trade.asset === asset
        );

  return (
    <section className="space-y-6">
      <TradeFilter
        selectedAsset={asset}
        onAssetChange={setAsset}
      />

      <TradeTable
        trades={filteredTrades}
      />
    </section>
  );
}