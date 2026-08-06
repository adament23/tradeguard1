import DashboardHeader from "@/components/dashboard/DashboardHeader";
import AccountSummary from "@/components/dashboard/AccountSummary";
import TradingStats from "@/components/dashboard/TradingStats";
import RiskIndicator from "@/components/dashboard/RiskIndicator";
import TradeHistory from "@/components/dashboard/TradeHistory";
import EquityCurve from "@/components/dashboard/EquityCurve";

import { useDashboardData } from "@/hooks/useDashboardData";


export default function App() {


  const {
    account,
    trades,

    currentBalance,

    totalPnL,

    winningTrades,
    losingTrades,

    winRate,

    largestWin,
    largestLoss,


    maximumDrawdown,
    remainingDrawdown,

    currentDayLoss,
    remainingDailyLoss,

  } = useDashboardData();




  return (

    <main className="min-h-screen bg-background p-6">

      <div className="mx-auto max-w-7xl space-y-8">


        <DashboardHeader />



        <AccountSummary

          startingBalance={
            account.startingBalance
          }

          currentBalance={
            currentBalance
          }

          totalPnL={
            totalPnL
          }

          maxDrawdown={
            account.maxDrawdown
          }

        />




        <TradingStats

          winningTrades={
            winningTrades
          }

          losingTrades={
            losingTrades
          }

          winRate={
            winRate
          }

          largestWin={
            largestWin
          }

          largestLoss={
            largestLoss
          }

        />





        <RiskIndicator

          maximumDrawdownUsed={
            maximumDrawdown
          }

          remainingDrawdown={
            remainingDrawdown
          }

          maxDrawdown={
            account.maxDrawdown
          }

          currentDayLoss={
            currentDayLoss
          }

          remainingDailyLoss={
            remainingDailyLoss
          }

          dailyLossLimit={
            account.dailyLossLimit
          }

        />





        <EquityCurve

          startingBalance={
            account.startingBalance
          }

          trades={
            trades
          }

        />





        <TradeHistory

          trades={
            trades
          }

        />


      </div>

    </main>

  );

}