# Trader Risk Dashboard

A React + TypeScript based trading risk dashboard that helps traders monitor their account performance and understand whether they are close to violating account risk rules.

The dashboard calculates trading performance and risk metrics dynamically from trade data and provides a clear view of account health.

---

# What I Built

I built a Trader Risk Dashboard that allows traders to monitor:

- Account balance
- Trading performance
- Risk exposure
- Remaining drawdown limits

The dashboard dynamically calculates:

- Current Balance
- Total P&L
- Winning Trades
- Losing Trades
- Win Rate
- Largest Winning Trade
- Largest Losing Trade

---

# Additional Feature

## Equity Curve

I added an Equity Curve visualization as an additional feature.

The Equity Curve shows how the account balance changes after each trade.

It helps traders understand:

- Account growth consistency
- Drawdown periods
- Recovery after losses
- Overall trading performance

The chart is generated dynamically from trade data.

---

# How to Run the Project

## Prerequisites

Make sure you have installed:

- Node.js
- npm

## Steps

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Navigate to the project folder:

```bash
cd tradeguard1
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application:

```
http://localhost:5173
```

To create a production build:

```bash
npm run build
```

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the reduction in an account balance from its highest point to a lower point.

It represents the amount of money lost during a decline and helps measure the risk level of a trading account.

---

## 2. Why do you think a trader would care about their remaining drawdown rather than just their current P&L?

Current P&L only shows the current profit or loss, but remaining drawdown shows how much additional loss the trader can take before breaking account rules.

For evaluation and funded trading accounts, managing risk limits is as important as making profits.

---

## 3. If you had another day to work on this dashboard, what would you improve?

I would improve the dashboard by adding:

- Real-time trading data integration
- More advanced performance analytics
- Risk alerts and notifications
- Performance breakdown by asset
- Best and worst trading days
- Multiple account support