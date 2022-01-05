import {
  ResponseGetTokenPrice,
  ResponseGetTokens
} from '@swapper-org/swapper-coingecko-client'
export class SwapperCoingeckoClient {
  public getTokensPriceInUsd (): Promise<ResponseGetTokenPrice> {
    const response: ResponseGetTokenPrice = { bitcoin: { usd: '100000' }, ethereum: { usd: '1000' } }
    return new Promise((resolve) => resolve(response))
  }

  public getTokenDataBySymbol (): Promise<ResponseGetTokens> {
    const response: ResponseGetTokens = [{ id: 'ethereum', name: 'Ethereum', symbol: 'eth' }, { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc' }]
    return new Promise((resolve) => resolve(response))
  }
}
