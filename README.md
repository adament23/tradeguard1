# Trader Risk Dashboard

A React + TypeScript based trading risk dashboard that helps traders monitor their account performance and understand whether they are close to violating account risk rules.

The dashboard calculates trading performance and risk metrics dynamically from trade data and provides a clear view of account health.

---

# 🚀 Live Demo

Check out the live application:

🌐 https://tradeguard1-xi.vercel.app/

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
- Maximum Drawdown
- Daily Loss Limit Usage
- Risk Usage Percentage

All calculations are derived from trade data and are not hardcoded.

---

# Features

## Account Overview

- Starting balance tracking
- Current account balance
- Total profit and loss
- Maximum drawdown monitoring

## Performance Metrics

- Winning trades count
- Losing trades count
- Win rate calculation
- Largest winning trade
- Largest losing trade

## Risk Monitor

- Maximum drawdown usage
- Remaining drawdown
- Daily loss limit tracking
- Risk usage percentage
- Account risk status

## Trade History

- Displays executed trades
- Shows asset, trade type, entry price, exit price, and P&L

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
