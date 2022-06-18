export const TTD_USD_RATE = 6.8
export const applyTtdPrecision = (amount) => Math.round(amount / 10) * 10

export const TTD_LABEL = "TTD"
export const FIAT_WALLET_NAME = "TT Dollar Wallet"

export const usdEdgeToTtd = (usdEdge) => ({
  ...usdEdge,
  node: {
    ...usdEdge.node,
    settlementAmount: applyTtdPrecision(usdEdge.node.settlementAmount * TTD_USD_RATE),
    settlementFee: applyTtdPrecision(usdEdge.node.settlementFee * TTD_USD_RATE),
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
  btcWalletValueInUsd: balances.btcWalletValueInUsd,
  usdWalletBalance: applyTtdPrecision(balances.usdWalletBalance * TTD_USD_RATE),
})

export const currencyFromTxn = (txn) => txn.node.settlementCurrency
