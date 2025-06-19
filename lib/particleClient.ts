import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

export const particleClient = createPublicClient({
  chain: mainnet,
  transport: http(
    `https://rpc.particle.network/evm-chain?chainId=1&projectUuid=${process.env.NEXT_PARTICLE_NETWORK_PUBLIC_PROJECT_ID}&clientKey=${process.env.NEXT_PARTICLE_NETWORK_PUBLIC_CLIENT_KEY}`
  ),
})
