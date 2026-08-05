import { accountData } from "@/data/account";
import { trades } from "@/data/trades";

import { calculateTradingStats } from "@/lib/trading-calculations";

import {
  getCurrentDrawdown,
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



  const remainingDrawdown =
    getRemainingDrawdown(
      accountData.maxDrawdown,
      currentDrawdown
    );



  const today =
    "2026-08-04";



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

    remainingDrawdown,


    currentDayLoss,

    remainingDailyLoss,


    riskStatus,

  };

}