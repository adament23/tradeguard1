import type { Trade } from "@/types/trade";


export function calculateTradingStats(
  trades: Trade[]
) {

  const winningTrades =
    trades.filter(
      trade => trade.pnl > 0
    );


  const losingTrades =
    trades.filter(
      trade => trade.pnl < 0
    );



  const totalTrades = trades.length;



  const winRate =
    totalTrades === 0
      ? 0
      :
      (winningTrades.length / totalTrades) * 100;



  const largestWin =
    winningTrades.length === 0
      ? 0
      :
      Math.max(
        ...winningTrades.map(
          trade => trade.pnl
        )
      );



  const largestLoss =
    losingTrades.length === 0
      ? 0
      :
      Math.min(
        ...losingTrades.map(
          trade => trade.pnl
        )
      );



  const totalPnL =
    trades.reduce(
      (sum, trade) =>
        sum + trade.pnl,
      0
    );



  return {

    totalTrades,

    winningTrades:
      winningTrades.length,

    losingTrades:
      losingTrades.length,

    winRate,

    largestWin,

    largestLoss,

    totalPnL,

  };

}