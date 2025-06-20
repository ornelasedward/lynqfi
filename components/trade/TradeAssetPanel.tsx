"use client";
import RadioSvg from "@/components/trade/RadioSvg";
import RefreshIcon from "@/components/trade/RefreshIcon";

export default function TradeAssetPanel() {
    return (
        <div className="bg-[#181818] relative flex flex-col rounded-xl py-3 max-sm:w-[100%] sm:flex sm:flex-1 sm:flex-col overflow-hidden overscroll-none touch-pan-y [-webkit-overflow-scrolling:touch] min-h-[300px] " 
            data-sentry-component="AccountSection" 
            data-sentry-source-file="AccountSection.tsx">
            <div className="flex w-full items-center justify-between px-3 text-gray-400">
                <span>Assets(0)</span>
                <div className="flex gap-2">
                    <span className="cursor-pointer">📋</span>
          <span className="cursor-pointer">📊</span>
          <span className="cursor-pointer">⚙️</span>
        </div>
      </div>
      <div className="flex justify-between sm:px-3 py-2">
        <div className="z-50 sm:bg-background-400 max-sm:bg-background-300 flex items-center" data-sentry-component="TabsShowWithApp" data-sentry-source-file="TabsShowWithApp.tsx">
            <div className="flex items-center">
                <div className="hover:text-gray-400 shrink-0 cursor-pointer px-4 transition-colors text-gray-400 pl-0 text-xs">Avail.</div>
                <div className="hover:text-gray-400 shrink-0 cursor-pointer px-4 transition-colors text-gray-400 text-xs">Unavail.</div>
                </div>
                </div>
                <div className="text-gray-400 sm:!bg-background-400 max-sm:bg-background-300 flex w-full items-center justify-end text-xs" data-sentry-component="HoldingsShowAll" data-sentry-source-file="HoldingsShowAll.tsx">
                    <div className="flex items-center gap-2">
                        <div className="flex cursor-pointer items-center gap-2 text-gray-400-300" data-sentry-component="ShowAllRadio" data-sentry-source-file="ShowAllRadio.tsx">
                          <div>
                            <RadioSvg className="text-gray-400-300" /></div><div className="text-xs">Current</div>
                            </div>
                            <div className="flex cursor-pointer items-center gap-2 text-foreground-300" data-sentry-component="ShowAllRadio" data-sentry-source-file="ShowAllRadio.tsx">
                              <div>
                                <RadioSvg className="text-foreground-300" />
                                  </div>
                                  <div className="text-xs">Small</div>
                                  </div>
                                  <RefreshIcon className="cursor-pointer text-foreground-300" style={{ transform: "rotate(360deg)"}} />
                                  </div>
                                  </div>
                                  </div>
      
      <div className="flex flex-col items-center justify-center h-24 text-gray-600">
        <div className="text-3xl mb-2 grayscale mt-6">👜</div>
        <div className="text-xs">No assets found</div>
        </div>
      </div>

    );
}