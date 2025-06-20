"use client";
import React, { useState } from "react";

const quickAmounts = [20, 100, 500, 1000];

export default function TradePanel() {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'Market' | 'Limit' | 'TWAP'>('Market');
  const [amount, setAmount] = useState('');

  return (
    <div className="relative mx-auto w-full max-w-full">
    <div className="w-[300px] bg-[#181818] rounded-xl shadow-lg p-4 mx-auto mt-4">
      {/* Header Tabs */}
      <div className="flex items-center gap-1 mb-2">
        <button className="bg-[#232323] text-xs text-white px-2 py-1 rounded">P1</button>
        <button className="bg-[#232323] text-xs text-white px-2 py-1 rounded">+</button>
        <button className="bg-[#232323] text-xs text-white px-2 py-1 rounded">+</button>
        <button className="bg-[#232323] text-xs text-white px-2 py-1 rounded">S1</button>
        <button className="bg-[#232323] text-xs text-white px-2 py-1 rounded">+</button>
        <button className="ml-auto bg-transparent text-gray-400 text-xl">⋮</button>
      </div>
      {/* Buy/Sell Toggle */}
      <div className="flex gap-2 mb-3">
        <button
          className={`flex-1 py-2 rounded-lg text-sm font-bold ${side === 'buy' ? 'bg-[#C84CF6] text-white' : 'bg-[#232323] text-gray-300'}`}
          onClick={() => setSide('buy')}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-2 rounded-lg text-sm font-bold ${side === 'sell' ? 'bg-[#C84CF6] text-white' : 'bg-[#232323] text-gray-300'}`}
          onClick={() => setSide('sell')}
        >
          Sell
        </button>
      </div>
      {/* Order Type Tabs */}
      <div className="flex gap-2 mb-2">
        {['Market', 'Limit', 'TWAP'].map((type) => (
          <button
            key={type}
            className={`flex-1 py-1 rounded text-xs font-semibold ${orderType === type ? 'bg-[#232323] text-white' : 'bg-transparent text-gray-400'}`}
            onClick={() => setOrderType(type as 'Market' | 'Limit' | 'TWAP')}
          >
            {type}
          </button>
        ))}
      </div>
      {/* Order Inputs */}
      {orderType === 'Limit' && (
        <>
          <div className="mb-2">
            <div className="flex items-center bg-[#232323] rounded px-3 py-2 mb-2">
              <input
                type="number"
                placeholder="Limit Price"
                className="flex-1 bg-transparent text-white text-right outline-none placeholder-gray-500 text-sm"
                style={{ direction: 'rtl' }}
                value={0.2194} // Placeholder value
                readOnly
              />
              <span className="ml-2 text-xs text-gray-400">USD</span>
            </div>
            <div className="flex items-center bg-[#232323] rounded px-3 py-2">
              <input
                type="number"
                placeholder="Amount"
                className="flex-1 bg-transparent text-white text-right outline-none placeholder-gray-500 text-sm"
                style={{ direction: 'rtl' }}
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <span className="ml-2 text-xs text-gray-400">USD</span>
            </div>
          </div>
        </>
      )}
      {orderType === 'TWAP' && (
        <>
          <div className="mb-2">
            <div className="flex gap-2 mb-2">
              <div className="flex-1 bg-[#232323] rounded px-3 py-2 flex items-center justify-between">
                <span className="text-xs text-gray-400">Intv.</span>
                <select className="bg-transparent text-white text-xs outline-none">
                  <option value="5m">5 m</option>
                  <option value="10m">10 m</option>
                  <option value="30m">30 m</option>
                  <option value="1h">1 h</option>
                </select>
              </div>
              <div className="flex-1 bg-[#232323] rounded px-3 py-2 flex items-center justify-between opacity-70">
                <span className="text-xs text-gray-400">Split to</span>
                <span className="text-white text-xs">2 Orders</span>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <label className="flex items-center text-xs text-gray-400 cursor-pointer select-none">
                <input type="checkbox" className="accent-[#C84CF6] mr-1" />
                Set limit (USD)
              </label>
            </div>
            <div className="flex items-center bg-[#232323] rounded px-3 py-2 mb-2">
              <input
                type="number"
                placeholder="Amount"
                className="flex-1 bg-transparent text-white text-right outline-none placeholder-gray-500 text-sm"
                style={{ direction: 'rtl' }}
                value={amount}
                onChange={e => setAmount(e.target.value)}
              />
              <span className="ml-2 text-xs text-gray-400">USD</span>
            </div>
          </div>
        </>
      )}
      {orderType === 'Market' && (
        <input
          type="number"
          placeholder="Amount"
          className="w-full bg-[#232323] text-white rounded px-3 py-2 mb-2 text-sm placeholder-gray-500 text-right"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
      )}
      {/* Quick Amounts */}
      <div className="flex gap-2 mb-2">
        {quickAmounts.map((amt) => (
          <button
            key={amt}
            className="flex-1 bg-[#232323] text-gray-200 rounded py-1 text-xs"
            onClick={() => setAmount(amt.toString())}
          >
            ${amt}
          </button>
        ))}
        <button className="flex-1 bg-[#232323] text-gray-200 rounded py-1 text-xs">Max</button>
      </div>
      {/* Balance & TP/SL */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400">$0 <span className="text-purple-400 underline cursor-pointer">Add</span></span>
        <span className="text-xs text-gray-400">TP/SL <span className="ml-1 inline-block w-3 h-3 rounded-full border-2 border-gray-400 align-middle"></span></span>
      </div>
      {/* Deposit Button */}
      <button className="w-full bg-[#C84CF6] text-white py-2 rounded-lg font-semibold mb-2 text-sm">
        Deposit more tokens
        <div className="text-xs text-[#fff] font-normal leading-tight">Insufficient balance</div>
      </button>
      {/* Leverage/Settings Row */}
      <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
        <span>-</span>
        <span>·</span>
        <span>1x</span>
        <span>·</span>
        <span>Auto</span>
        <span>·</span>
        <span>On</span>
      </div>
    </div>
    </div>
  );
}
