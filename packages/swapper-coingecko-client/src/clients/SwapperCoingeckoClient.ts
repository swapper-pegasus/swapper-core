import { HttpClient, AxiosClient as DefaultHttpClient } from '../http'
import ISwapperCoingeckoClient from './interfaces/ISwapperCoingeckoClient'
import SwapperCoingeckoConfigBuilder from '../SwapperCoingeckoConfigBuilder'
import SwapperCoingeckoHandler from '../SwapperCoingeckoHandler'
import {
  // RESPONSE
  ResponseGetTokenPrice,
  ResponseGetTokens,
  // REQUEST
  RequestGetTokenPrice,
  // COMMON
  Token
} from './types'

export const USD_SYMBOL = 'usd'

export default class SwapperCoingeckoClient implements ISwapperCoingeckoClient {
  private client: HttpClient
  private cache: Array<Token>

  constructor (
    baseUrl: string,
    requestConfigBuilder = new SwapperCoingeckoConfigBuilder({ baseUrl: baseUrl }),
    responseHandler = new SwapperCoingeckoHandler(),
    client = new DefaultHttpClient({
      responseHandler,
      requestConfigBuilder
    })
  ) {
    this.client = client
  }

  public async getTokensPriceInUsd (requestPayload: RequestGetTokenPrice): Promise<ResponseGetTokenPrice> {
    const allTokens = await this.getTokens()
    const idSelectedTokens: Array<string | undefined> = requestPayload.tokens.map((symbolSelectedToken) => {
      const selectedToken: Token | undefined = allTokens.find((token) => token.symbol === symbolSelectedToken)
      return selectedToken?.id
    })
    const params = {
      ids: idSelectedTokens.join(','),
      vs_currencies: USD_SYMBOL
    }
    return this.client.get('/simple/price', params)
  }

  public async getTokens (): Promise<ResponseGetTokens> {
    if (!this.cache) {
      this.cache = await this.client.get('/coins/list', {})
    }
    return new Promise((resolve) => resolve(this.cache))
  }

  public async getTokenDataBySymbol (tokenSymbols: Array<string>): Promise<ResponseGetTokens> {
    const tokens = await this.getTokens()
    const selectedTokens = tokens.filter((token) => tokenSymbols.includes(token.symbol))
    return selectedTokens
  }
}
