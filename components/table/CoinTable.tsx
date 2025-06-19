"use client"

import * as React from "react"
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  flexRender,
  SortingState,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Sample data structure
export type TokenData = {
  token: string
  contract: string
  price: number
  change24h: number
  marketCap: number
  fdv: number
  holders: number
  top10: number
  top100: number
  volume24h: number
  txs: number
  traders: number
  age: string
  liquidity: number
  social: string
}

const data: TokenData[] = [
  {
    token: "Example",
    contract: "0x123...abc",
    price: 0.01,
    change24h: 5.2,
    marketCap: 1000000,
    fdv: 2000000,
    holders: 1234,
    top10: 95.8,
    top100: 100,
    volume24h: 100000,
    txs: 321,
    traders: 200,
    age: "30d",
    liquidity: 50000,
    social: "Twitter / TG",
  },
]

export const columns: ColumnDef<TokenData>[] = [
  {
    accessorKey: "token",
    header: "Token",
  },
  {
    accessorKey: "contract",
    header: "Contract",
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price / 24h%
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        ${row.original.price.toFixed(4)} / {row.original.change24h.toFixed(1)}%
      </div>
    ),
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        MCap / FDV
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        ${row.original.marketCap.toLocaleString()} / ${row.original.fdv.toLocaleString()}
      </div>
    ),
  },
  {
    accessorKey: "holders",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Holders / Top 10 / Top 100
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        ${row.original.volume24h.toLocaleString()} / {row.original.top10}% / {row.original.top100}%
      </div>
    ),
  },
  {
    accessorKey: "volume24h",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        24h Vol / Txs / Traders
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div>
        ${row.original.volume24h.toLocaleString()} / {row.original.txs} / {row.original.traders}
      </div>
    ),
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "liquidity",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Liquidity
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    accessorKey: "social",
    header: "Social media",
  },
]

export function CoinTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="rounded-3xl border-1 border-black p-2 m-3">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}