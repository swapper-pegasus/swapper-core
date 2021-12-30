import { HttpClient, AxiosClient as DefaultHttpClient } from '../http'
import ISwapperCoingeckoClient from './interfaces/ISwapperCoingeckoClient'
import SwapperCoingeckoConfigBuilder from '../SwapperCoingeckoConfigBuilder'
import SwapperCoingeckoHandler from '../SwapperCoingeckoHandler'
import {
  // RESPONSE
  ResponseGetConversionRate,
  ResponseGetTokenPrice,
  ResponseGetTokens,
  // REQUEST
  RequestGetTokenPrice,
  RequestCoversionRate
} from './types'

export default class SwapperCoingeckoClient implements ISwapperCoingeckoClient {
  private client: HttpClient

  constructor (baseUrl: string) {
    const requestConfigBuilder = new SwapperCoingeckoConfigBuilder({ baseUrl: baseUrl })
    const responseHandler = new SwapperCoingeckoHandler()
    this.client = new DefaultHttpClient({
      responseHandler,
      requestConfigBuilder
    })
    console.log(this.client)
  }

  getTokenPrice (requestPayload: RequestGetTokenPrice): Promise<ResponseGetTokenPrice> {
    return new Promise(() => console.log(requestPayload))
  }

  getTokens (): Promise<ResponseGetTokens> {
    return this.client.get('/coins/list', {})
  }

  getConversionRate (requestPayload: RequestCoversionRate): Promise<ResponseGetConversionRate> {
    return new Promise(() => console.log(requestPayload))
  }
}
