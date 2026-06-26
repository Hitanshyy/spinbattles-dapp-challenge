'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useWallet } from '@/lib/hooks/useWallet'
import { useEffect, useState } from 'react'

export function WalletConnect() {
  const { address, isConnected } = useWallet()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="border border-gray-800 rounded-lg p-4 bg-gray-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Wallet</p>
          {mounted && isConnected && address ? (
            <p className="text-sm font-mono text-gray-200 break-all">
              {address}
            </p>
          ) : (
            <p className="text-sm text-gray-500">Not connected</p>
          )}
        </div>
        <ConnectButton
          showBalance={false}
          accountStatus="address"
          chainStatus="none"
        />
      </div>
    </div>
  )
}