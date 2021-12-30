import {
  // RESPONSE
  ResponseGetTokenPrice,
  ResponseGetTokens,
  // REQUEST
  RequestGetTokenPrice
} from '../types'
export default interface ISwapperCoingeckoClient {
    getTokensPriceInUsd(requestPayload: RequestGetTokenPrice): Promise<ResponseGetTokenPrice>,
    getTokens(): Promise<ResponseGetTokens>,
}
