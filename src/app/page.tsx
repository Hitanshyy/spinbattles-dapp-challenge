'use client'

import { WalletConnect } from '@/components/WalletConnect'
import { RewardPanel } from '@/components/RewardPanel'
import { useWallet } from '@/lib/hooks/useWallet'

export default function Home() {
  const { isConnected } = useWallet()

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white mb-1">SpinBattles</h1>
        <p className="text-gray-400 text-sm">Reward Claim Interface</p>
      </div>

      <WalletConnect />

      {isConnected && (
        <div className="mt-8">
          <RewardPanel />
        </div>
      )}

      {!isConnected && (
        <div className="mt-8 text-sm text-gray-500">
          Connect your wallet to view and claim pending rewards.
        </div>
      )}
    </main>
  )
}
