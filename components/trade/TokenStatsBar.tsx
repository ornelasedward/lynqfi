import React from "react";

export default function TokenStatsBar() {
  return (
    <div className="flex items-center w-full bg-[#181818] rounded-lg px-4 py-1 shadow text-xs font-medium text-white gap-6 min-h-[38px]">
      <span className="text-[#C84CF6] font-bold text-base">$0.03916 <span className="text-[#ffb347] text-[10px] font-semibold align-middle">▼ 0.44%</span></span>
      <span className="text-gray-300">$391.23K / $391.23K <span className="text-gray-500">MCap / FDV</span></span>
      <span className="text-gray-300">$65.94K <span className="text-gray-500">Liquidity</span></span>
      <span className="text-gray-300">$37.2K / 170 / 26 <span className="text-gray-500">24h Vol / Txs / Traders</span></span>
      <span className="text-gray-300">82 / 93.58% / 100% <span className="text-gray-500">Holders / Top 10 / Top 100</span></span>
      <span className="flex items-center gap-1 text-green-400"> <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Safe <span className="bg-green-900 text-green-300 rounded px-1 ml-1 text-[11px]">1/1</span></span>
      <span className="text-gray-400">Audit</span>
    </div>
  );
}
