import {
  Token
} from '@swapper-org/swapper-coingecko-client'
import { WalletBalance } from '@swapper-org/swapper-wallets'

export const SYMBOL_ETH = 'eth'
export const WALLET_ETH = 'EthWallet'
export const SYMBOL_BTC = 'btc'
export const WALLET_BTC = 'BtcWallet'
export const SUPPORTED_TOKENS = [SYMBOL_ETH]
export const WEI = 1e18
export const DEFAULT_TOKEN: Token = {
  id: 'ethereum',
  name: 'Ethereum',
  symbol: 'eth'
}
export const DEFAULT_BALANCE: WalletBalance = {
  confirmed: '0',
  unconfirmed: '0'
}
export const MAP_WALLET_CONSTRUCTORS: Record<string, string> = {
  [SYMBOL_ETH]: WALLET_ETH
}
