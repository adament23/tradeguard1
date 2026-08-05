import type { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import type { Trade } from "@/types/trade";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export const columns: ColumnDef<Trade>[] = [
  {
    accessorKey: "asset",
    header: "Asset",
  },

  {
    accessorKey: "type",
    header: "Position",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.type === "Long"
            ? "default"
            : "secondary"
        }
      >
        {row.original.type}
      </Badge>
    ),
  },

  {
    accessorKey: "entryPrice",
    header: "Entry",
    cell: ({ row }) =>
      formatCurrency(row.original.entryPrice),
  },

  {
    accessorKey: "exitPrice",
    header: "Exit",
    cell: ({ row }) =>
      formatCurrency(row.original.exitPrice),
  },

  {
    accessorKey: "quantity",
    header: "Qty",
  },

  {
    accessorKey: "pnl",
    header: "P&L",
    cell: ({ row }) => {
      const pnl = row.original.pnl;

      return (
        <span
          className={
            pnl >= 0
              ? "font-semibold text-green-600"
              : "font-semibold text-red-600"
          }
        >
          {formatCurrency(pnl)}
        </span>
      );
    },
  },

  {
    accessorKey: "date",
    header: "Date",
  },

  {
    id: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          row.original.pnl >= 0
            ? "default"
            : "destructive"
        }
      >
        {row.original.pnl >= 0 ? "Win" : "Loss"}
      </Badge>
    ),
  },
];