import React from "react";
import Image from "next/image";

// Example asset data; in a real app, pass as props or fetch from API
const assets = [
  { icon: "/assets/btc.svg", symbol: "BTC", value: "$103,539.4" },
  { icon: "/assets/eth.svg", symbol: "ETH", value: "$2,420.55" },
  { icon: "/assets/sol.svg", symbol: "SOL", value: "$140.86" },
  { icon: "/assets/matic.svg", symbol: "MATIC", value: "$0.2143" },
];

export default function AssetTickerBar({ items = assets }: { items?: { icon: string; symbol: string; value: string }[] }) {
  return (
    <div className="flex items-center bg-[#181818] rounded-full px-1 py-1 w-fit mx-auto shadow-md">
      {items.map((asset) => (
        <div key={asset.symbol} className="flex items-center gap-1 text-xs font-medium text-white px-1">
          <Image src={asset.icon} alt={asset.symbol} width={12} height={12} className="w-3 h-3 rounded-full bg-black" unoptimized />
          <span>{asset.value}</span>
        </div>
      ))}
    </div>
  );
}
