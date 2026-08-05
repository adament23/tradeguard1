import { TrendingUp } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-8 w-8 text-primary" />

          <h1 className="text-3xl font-bold tracking-tight">
            TradeGuard
          </h1>
        </div>

        <p className="mt-2 text-muted-foreground">
          Trader Risk Dashboard
        </p>
      </div>


      <div className="flex items-center gap-3">
        <ThemeToggle />

        
      </div>

    </header>
  );
}