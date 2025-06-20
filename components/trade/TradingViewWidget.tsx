"use client";
import React, { useEffect, useRef } from "react";
import { createChart, IChartApi, CandlestickData, Time } from "lightweight-charts";

interface TradingViewWidgetProps {
  symbol?: string;
}

export default function TradingViewWidget({ symbol = "BTCUSD" }: TradingViewWidgetProps) {
  const container = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!container.current) return;
    // Clean up existing chart
    // Clean up existing chart
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }
    const chart = createChart(container.current!, {
        layout: {
          background: { color: "#181818" },
          textColor: "#fff",
        },
        width: container.current ? container.current.offsetWidth : 400,
        height: container.current ? container.current.offsetHeight : 400,
        grid: {
          vertLines: { color: "#222" },
          horzLines: { color: "#222" },
        },
        timeScale: { borderColor: "#444" },
        rightPriceScale: { borderColor: "#444" },
      });
    // Attach chart instance to DOM node for cleanup
    chartRef.current = chart;
    const candleSeries = chart.addCandlestickSeries({
        upColor: "#22c55e",
        downColor: "#ef4444",
        borderVisible: false,
        wickUpColor: "#22c55e",
        wickDownColor: "#ef4444",
      });
      // Generate fake candlestick data
      const now = Math.floor(Date.now() / 1000);
      const candles: CandlestickData<Time>[] = [];
      let price = 0.04;
      for (let i = 0; i < 60; i++) {
        const open = price + (Math.random() - 0.5) * 0.002;
        const close = open + (Math.random() - 0.5) * 0.002;
        const high = Math.max(open, close) + Math.random() * 0.0015;
        const low = Math.min(open, close) - Math.random() * 0.0015;
        // Use ISO string with minute precision for unique, strictly increasing times


        const timeNum = now - (59 - i) * 60;
        candles.push({
          time: timeNum as Time,
          open: Number(open.toFixed(5)),
          high: Number(high.toFixed(5)),
          low: Number(low.toFixed(5)),
          close: Number(close.toFixed(5)),
        });
        price = close;
      }
      candleSeries.setData(candles);
      // Responsive resize
      const resize = () => {
        if (container.current) {
          chart.resize(container.current.offsetWidth, container.current.offsetHeight);
        }
      };
      window.addEventListener("resize", resize);
      return () => {
        window.removeEventListener("resize", resize);
        chart.remove();
      };
    }, [symbol]);

  return (
    <div
      ref={container}
      style={{ width: "100%", height: "100%", borderRadius: 12, overflow: "hidden", background: "#181818" }}
      className="shadow-md"
    />
  );
}
