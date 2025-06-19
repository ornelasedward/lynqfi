"use client"
import { useEffect } from "react";
import { useConnect, useEthereum } from "@particle-network/authkit"
import { syncUser } from "@/lib/syncUser";

export default function WalletLogin() {
  const { connect, disconnect, connected, connectionStatus } = useConnect()
  const { address } = useEthereum()

  useEffect(() => {
    if (connected && address) {
        syncUser(address)
    }
  }, [connected, address])
  
  return (
    <div className="text-center p-6">
      {!connected ? (
        <button
          className="bg-purple-600 text-white font-bold py-2 px-6 rounded shadow"
          onClick={() => connect({})}
        >
          Sign in with Particle
        </button>
      ) : (
        <>
          <p className="text-white mb-4">Connected Wallet: {address}</p>
          <button
            className="bg-gray-700 text-white font-bold py-2 px-6 rounded shadow"
            onClick={() => disconnect()}
          >
            Logout
          </button>
        </>
      )}
      <p className="text-sm text-gray-400 mt-2">Status: {connectionStatus}</p>
    </div>
  )
}
