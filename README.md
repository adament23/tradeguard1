# Trader Risk Dashboard

A React + TypeScript based trading risk dashboard that helps traders monitor their account performance and understand whether they are close to violating account risk rules.

The dashboard calculates trading performance and risk metrics dynamically from trade data and provides a clear view of account health.

---

# 🚀 Live Demo

Check out the live application:

🌐  https://tradeguard1-xi.vercel.app/

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

All calculations are derived from trade data and are not hardcoded.

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
git clone https://github.com/adament23/tradeguard1.git
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

# Tech Stack

## Frontend

- **React** - Used to build reusable dashboard components and manage the user interface.
- **TypeScript** - Used for type safety and better code maintainability.
- **Vite** - Used as the development build tool for fast development and optimized builds.
- **Tailwind CSS** - Used for responsive styling and UI design.
- **shadcn/ui** - Used for reusable UI components such as cards, tables, badges, and progress indicators.

## Data Visualization

- **Recharts** - Used to create the Equity Curve visualization and display account performance over time.

## Table Management

- **TanStack React Table** - Used to build the sortable and filterable trade history table.

## Icons

- **Lucide React** - Used for dashboard icons and visual indicators.

## Development Approach

- Built reusable React components for different dashboard sections.
- Created separate utility functions for trading calculations and risk calculations.
- Used mock trade data as requested.
- Implemented responsive design for different screen sizes.
- Ensured calculated values are derived dynamically instead of hardcoded.

---

# Product Questions

## 1. What is drawdown in trading?

Drawdown is the decrease in a trader's account balance from its highest point (peak equity) to the lowest point before recovering. It represents the amount of loss a trader experiences from their maximum account value. Maximum drawdown is an important risk metric because it helps measure the downside risk of a trading strategy.

## 2. Why do you think a trader would care about their remaining drawdown rather than just their current P&L?

A trader cares about remaining drawdown because it shows how much loss capacity is still available before reaching their maximum allowed risk limit. Current P&L only shows the current profit or loss, while remaining drawdown helps traders understand their risk position and avoid violating account rules.

## 3. If you had another day to work on this dashboard, what would you improve?

If I had another day to work on this dashboard, I would add real-time trade updates, interactive date filters, more advanced performance analytics, automated risk alerts, and backend integration for storing and managing live trading data.