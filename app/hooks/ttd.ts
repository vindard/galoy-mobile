const TTD_USD_RATE = 6.8

export const FIAT_WALLET_NAME = "TT Dollar Wallet"

export const usdEdgeToTtd = (usdEdge) => ({
  ...usdEdge,
  node: {
    ...usdEdge.node,
    settlementAmount: usdEdge.node.settlementAmount * TTD_USD_RATE,
    settlementFee: usdEdge.node.settlementFee * TTD_USD_RATE,
  },
})
export const btcEdgeToTtd = (btcEdge) => ({
  ...btcEdge,
  node: {
    ...btcEdge.node,
    settlementPrice: {
      ...btcEdge.node.settlementPrice,
      base: btcEdge.node.settlementPrice.base * TTD_USD_RATE,
    },
  },
})

export const balancesToTtd = (balances) => ({
  ...balances,
  btcWalletValueInUsd: balances.btcWalletValueInUsd * TTD_USD_RATE,
  usdWalletBalance: balances.usdWalletBalance * TTD_USD_RATE,
})
