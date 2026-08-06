import type { Trade } from "@/types/trade";


export function getEquityCurve(
  startingBalance: number,
  trades: Trade[]
) {
  let balance = startingBalance;

  return [
    {
      date: "Start",
      balance,
    },

    ...trades.map((trade) => {
      balance += trade.pnl;

      return {
        date: trade.date,
        balance,
      };
    }),
  ];
}



export function getCurrentDrawdown(
  startingBalance: number,
  trades: Trade[]
) {
  const equityCurve = getEquityCurve(
    startingBalance,
    trades
  );


  const currentBalance =
    equityCurve[equityCurve.length - 1].balance;


  const highestBalance =
    Math.max(
      ...equityCurve.map(
        (point) => point.balance
      )
    );


  return Math.max(
    highestBalance - currentBalance,
    0
  );
}



// ADD THIS FUNCTION HERE 👇

export function getMaximumDrawdown(
  startingBalance: number,
  trades: Trade[]
) {
  const equityCurve = getEquityCurve(
    startingBalance,
    trades
  );


  let peak = startingBalance;
  let maxDrawdown = 0;


  equityCurve.forEach((point) => {

    if (point.balance > peak) {
      peak = point.balance;
    }


    const drawdown =
      peak - point.balance;


    if (drawdown > maxDrawdown) {
      maxDrawdown = drawdown;
    }

  });


  return maxDrawdown;
}



export function getRemainingDrawdown(
  maxDrawdown: number,
  currentDrawdown: number
) {
  return Math.max(
    maxDrawdown - currentDrawdown,
    0
  );
}



export function getCurrentDayLoss(
  trades: Trade[],
  date: string
) {
  return Math.abs(
    trades
      .filter(
        (trade) =>
          trade.date === date &&
          trade.pnl < 0
      )
      .reduce(
        (sum, trade) =>
          sum + trade.pnl,
        0
      )
  );
}



export function getRemainingDailyLoss(
  dailyLossLimit: number,
  currentDayLoss: number
) {
  return Math.max(
    dailyLossLimit - currentDayLoss,
    0
  );
}



export function getRiskStatus(
  remainingDrawdown: number,
  remainingDailyLoss: number
) {

  if (
    remainingDrawdown <= 1000 ||
    remainingDailyLoss <= 500
  ) {
    return "At Risk";
  }


  if (
    remainingDrawdown <= 3000 ||
    remainingDailyLoss <= 1500
  ) {
    return "Approaching Limit";
  }


  return "Safe";
}