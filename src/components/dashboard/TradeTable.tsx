import { useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type SortingState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { columns } from "@/lib/columns";
import type { Trade } from "@/types/trade";

interface TradeTableProps {
  trades: Trade[];
}

export default function TradeTable({
  trades,
}: TradeTableProps) {
  const [sorting, setSorting] =
    useState<SortingState>([]);

  const table = useReactTable({
    data: trades,
    columns,

    state: {
      sorting,
    },

    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),

    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          {table
            .getHeaderGroups()
            .map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef
                              .header,
                            header.getContext()
                          )}

                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[
                        header.column.getIsSorted() as
                          | "asc"
                          | "desc"
                      ] ?? ""}
                    </TableHead>
                  )
                )}
              </TableRow>
            ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows.length ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <TableRow key={row.id}>
                  {row
                    .getVisibleCells()
                    .map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                </TableRow>
              ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No trades found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}