import { accountData } from "@/data/account";
import { trades } from "@/data/trades";

import { calculateTradingStats } from "@/lib/trading-calculations";

import {
  getCurrentDrawdown,
  getMaximumDrawdown,
  getRemainingDrawdown,
  getCurrentDayLoss,
  getRemainingDailyLoss,
  getRiskStatus,
} from "@/lib/risk-calculations";



export function useDashboardData() {


  const stats =
    calculateTradingStats(trades);



  const currentBalance =
    accountData.startingBalance +
    stats.totalPnL;



  const currentDrawdown =
    getCurrentDrawdown(
      accountData.startingBalance,
      trades
    );



  const maximumDrawdown =
    getMaximumDrawdown(
      accountData.startingBalance,
      trades
    );



  const remainingDrawdown =
    getRemainingDrawdown(
      accountData.maxDrawdown,
      maximumDrawdown
    );



  // Automatically gets latest trading day
  const today =
    trades.reduce(
      (latest, trade) =>
        trade.date > latest
          ? trade.date
          : latest,
      ""
    );



  // Calculates only that day's loss
  const currentDayLoss =
    getCurrentDayLoss(
      trades,
      today
    );



  const remainingDailyLoss =
    getRemainingDailyLoss(
      accountData.dailyLossLimit,
      currentDayLoss
    );



  const riskStatus =
    getRiskStatus(
      remainingDrawdown,
      remainingDailyLoss
    );



  return {

    account: accountData,

    trades,


    currentBalance,


    ...stats,


    currentDrawdown,


    maximumDrawdown,


    remainingDrawdown,


    currentDayLoss,


    remainingDailyLoss,


    riskStatus,

  };

}