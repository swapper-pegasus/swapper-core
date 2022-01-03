import { HttpClient, AxiosClient as DefaultHttpClient } from '../http'
import ISwapperNodechainClient from './interfaces/ISwapperNodechainClient'
import SwapperNodechainConfigBuilder from '../SwapperNodechainConfigBuilder'
import SwapperNodechainHandler from '../SwapperNodechainHandler'
import {
  // REQUEST
  RequestBroadcastTransaction,
  RequestGetAddressBalance,
  RequestGetBlockByNumber,
  RequestGetBlockByHash,
  RequestGetTransactionCount,
  RequestGetAddressUnspent,
  RequestGetFeePerByte,
  RequestGetTransaction,
  RequestGetAddressHistory,
  // RESPONSES
  ResponseGetBlockByHashBtc,
  ResponseGetBlockByNumberBtc,
  ResponseGetAddressBalance,
  ResponseGetHeight,
  ResponseGetTransactionCount,
  ResponseGetAddressUnspent,
  RequestGetAddressesBalance,
  ResponseGetAddressesBalance,
  ResponseGetTransactionBtc,
  ResponseGetTransactionHex,
  ResponseGetAddressHistory,
  ResponseBroadcastTransaction,
  ResponseGetFeePerByte
} from './types'

export default class SwapperNodechainBtcClient implements ISwapperNodechainClient {
  private client: HttpClient
  private jsonRpcVersion: string

  constructor (baseUrl: string, jsonRpcVersion?: string) {
    const requestConfigBuilder = new SwapperNodechainConfigBuilder({ baseUrl: baseUrl })
    const responseHandler = new SwapperNodechainHandler()
    this.jsonRpcVersion = jsonRpcVersion || '2.0'
    this.client = new DefaultHttpClient({
      responseHandler,
      requestConfigBuilder
    })
  }

  public getAddressBalance (requestPayload: RequestGetAddressBalance): Promise<ResponseGetAddressBalance> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getAddressBalance'))
  }

  public getHeight (): Promise<ResponseGetHeight> {
    return this.client.post('/rpc', this.buildPayload({}, 'getHeight'))
  }

  public broadcastTransaction (requestPayload: RequestBroadcastTransaction): Promise<ResponseBroadcastTransaction> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'broadcastTransaction'))
  }

  public getFeePerByte (requestPayload: RequestGetFeePerByte): Promise<ResponseGetFeePerByte> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getFeePerByte'))
  }

  public getBlockByNumber (requestPayload: RequestGetBlockByNumber): Promise<ResponseGetBlockByNumberBtc> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getBlockByNumber'))
  }

  public getBlockByHash (requestPayload: RequestGetBlockByHash): Promise<ResponseGetBlockByHashBtc> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getBlockByHash'))
  }

  public getTransactionCount (requestPayload: RequestGetTransactionCount): Promise<ResponseGetTransactionCount> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransactionCount'))
  }

  public getAddressUnspent (requestPayload: RequestGetAddressUnspent): Promise<ResponseGetAddressUnspent> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getAddressUnspent'))
  }

  public getAddressesBalance (requestPayload: RequestGetAddressesBalance): Promise<ResponseGetAddressesBalance> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getAddressesBalance'))
  }

  public getTransaction (requestPayload: RequestGetTransaction): Promise<ResponseGetTransactionBtc> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransaction'))
  }

  public getTransactionHex (requestPayload: RequestGetTransaction): Promise<ResponseGetTransactionHex> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransactionHex'))
  }

  public getAddressHistory (requestPayload: RequestGetAddressHistory): Promise<ResponseGetAddressHistory> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getAddressHistory'))
  }

  private buildPayload (params: object, method: string) {
    return {
      params: params,
      method: method,
      id: 1,
      jsonrpc: this.jsonRpcVersion
    }
  }
}
