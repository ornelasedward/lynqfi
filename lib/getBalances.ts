import { particleClient } from "./particleClient"
import { erc20Abi } from "viem"
import { Address } from "viem"

export async function getEthBalance(address: Address): Promise<number> {
  const balance = await particleClient.getBalance({ address })
  return Number(balance) / 1e18
}

export async function getERC20Balance(
  tokenAddress: Address,
  userAddress: Address,
  decimals: number
): Promise<number> {
  try {
    const result = await particleClient.readContract({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: "balanceOf",
      args: [userAddress],
    })

    return Number(result) / Math.pow(10, decimals)
  } catch (err) {
    console.error(`Error fetching ${tokenAddress} balance:`, err)
    return 0
  }
}
