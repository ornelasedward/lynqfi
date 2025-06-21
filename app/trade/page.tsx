import TradePanel from "@/components/trade/TradePanel"
import TradeAssetPanel from "@/components/trade/TradeAssetPanel"
import AssetTickerBar from "@/components/trade/AssetTickerBar"
import TradingViewWidget from "@/components/trade/TradingViewWidget";
import TokenStatsBar from "@/components/trade/TokenStatsBar";

export default function TradePage() {
  return (
    <div className="flex flex-row w-full h-screen bg-black gap-[5px]">
       <div
        className="data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] scrollbar-hide trading-operation hidden h-full overflow-auto md:flex"
        data-orientation="vertical"
        data-sentry-element="ScrollShadow"
        data-sentry-component="TradingOperation"
        data-sentry-source-file="TradingOperation.tsx"
        data-top-scroll="false"
        data-bottom-scroll="false"
      >
        {/* Chart section */}
        <div className="flex w-full flex-col rounded-[10px] h-screen gap-[5px]">
          <TokenStatsBar />
          <TradingViewWidget />
        </div>
      </div>
      {/* Trading panel column */}
      <div
        className="data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] scrollbar-hide trading-operation hidden h-full w-[300px] overflow-auto md:flex"
        data-orientation="vertical"
        data-sentry-element="ScrollShadow"
        data-sentry-component="TradingOperation"
        data-sentry-source-file="TradingOperation.tsx"
        data-top-scroll="false"
        data-bottom-scroll="false"
      >
        <div className="flex w-full flex-col gap-[5px] rounded-[10px] h-screen">
          <TradePanel />
          <TradeAssetPanel />
          <AssetTickerBar />
        </div>
      </div>
    </div>
  );
}
