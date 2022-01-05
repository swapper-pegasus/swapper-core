import {
  Token
} from '@swapper-org/swapper-coingecko-client'

export const SYMBOL_ETH = 'eth'
export const SUPPORTED_TOKENS = [SYMBOL_ETH]
export const WEI = 1e18
export const DEFAULT_TOKEN: Token = {
  id: 'ethereum',
  name: 'Ethereum',
  symbol: 'eth'
}
