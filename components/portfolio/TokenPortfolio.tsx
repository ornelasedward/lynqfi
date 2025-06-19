"use client"

import { useEffect, useState } from "react"
import { useEthereum } from "@particle-network/authkit"
import { getEthBalance, getERC20Balance } from "@/lib/getBalances"

const tokenList: TokenWithBalance[] = [
  {
    name: "USDC",
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: 6,
    balance: 0,
  },
  {
    name: "DAI",
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    decimals: 18,
    balance: 0,
  },
]


type TokenWithBalance = {
  name: string
  symbol: string
  address: `0x${string}`
  decimals: number
  balance: number
}

export default function TokenPortfolio() {
  const { address } = useEthereum()
  const [eth, setEth] = useState<number>(0)
  const [tokens, setTokens] = useState<TokenWithBalance[]>([])

  useEffect(() => {
    if (typeof address !== "string" || !address.startsWith("0x")) return
    const formattedAddress = address as `0x${string}`



    async function fetchData() {
      const ethBalance = await getEthBalance(formattedAddress)
      setEth(ethBalance)

      const tokenBalances = await Promise.all(
        tokenList.map(async (token) => {
          const bal = await getERC20Balance(token.address, formattedAddress, token.decimals)
          return { ...token, balance: bal }
        })
      )

      setTokens(tokenBalances)
    }

    fetchData()
  }, [address])

  return (
    <div className="p-6 text-white">
      <h2 className="text-xl font-bold mb-4">Your Portfolio</h2>
      <p className="mb-6">ETH Balance: {eth.toFixed(4)}</p>
      <ul className="space-y-2">
        {tokens.map((t) => (
          <li key={t.symbol} className="bg-gray-800 p-4 rounded-xl shadow">
            {t.symbol}: {t.balance.toFixed(4)}
          </li>
        ))}
      </ul>
    </div>
  )
}
