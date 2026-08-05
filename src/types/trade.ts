// src/types/trade.ts

export interface Trade {
  id: number;

  asset: "BTC" | "ETH" | "SOL";

  type: "Long" | "Short";

  entryPrice: number;

  exitPrice: number;

  quantity: number;

  pnl: number;

  date: string;
}