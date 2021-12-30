import {
  // RESPONSE
  ResponseGetConversionRate,
  ResponseGetTokenPrice,
  ResponseGetTokens,
  // REQUEST
  RequestGetTokenPrice,
  RequestCoversionRate
} from '../types'
export default interface ISwapperCoingeckoClient {
    // Common methods
    getTokenPrice(requestPayload: RequestGetTokenPrice): Promise<ResponseGetTokenPrice>,
    getTokens(): Promise<ResponseGetTokens>,
    getConversionRate(requestPayload: RequestCoversionRate): Promise<ResponseGetConversionRate>
}
