import { HttpClient, AxiosClient as DefaultHttpClient } from '../http'
import ISwapperNodechainClient from './interfaces/ISwapperNodechainClient'
import SwapperNodechainConfigBuilder from '../SwapperNodechainConfigBuilder'
import SwapperNodechainHandler from '../SwapperNodechainHandler'
import {
  ResponseGetAddressBalance,
  ResponseGetHeight,
  ResponseGetBlockByNumberEth,
  ResponseGetBlockByHashEth,
  ResponseGetTransactionCount,
  ResponseGetGasPrice,
  ResponseEstimateGas,
  ResponseBroadcastTransaction,
  // REQUESTS
  RequestGetAddressBalance,
  RequestGetBlockByNumber,
  RequestGetBlockByHash,
  RequestGetTransactionCount,
  RequestGetTransactionReceipt,
  RequestGetAddressesBalance,
  ResponseGetAddressesBalance,
  ResponseGetTransactionReceipt,
  RequestEstimateGas,
  RequestGetTransaction,
  ResponseGetTransactionEth,
  RequestBroadcastTransaction
} from './types'
export default class SwapperNodechainEthClient implements ISwapperNodechainClient {
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

  public getGasPrice (): Promise<ResponseGetGasPrice> {
    return this.client.post('/rpc', this.buildPayload({}, 'getGasPrice'))
  }

  public getBlockByNumber (requestPayload: RequestGetBlockByNumber): Promise<ResponseGetBlockByNumberEth> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getBlockByNumber'))
  }

  public getBlockByHash (requestPayload: RequestGetBlockByHash): Promise<ResponseGetBlockByHashEth> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getBlockByHash'))
  }

  public getTransactionCount (requestPayload: RequestGetTransactionCount): Promise<ResponseGetTransactionCount> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransactionCount'))
  }

  public getTransactionReceipt (requestPayload: RequestGetTransactionReceipt): Promise<ResponseGetTransactionReceipt> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransactionReceipt'))
  }

  public getAddressesBalance (requestPayload: RequestGetAddressesBalance): Promise<ResponseGetAddressesBalance> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getAddressesBalance'))
  }

  public estimateGas (requestPayload: RequestEstimateGas): Promise<ResponseEstimateGas> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'estimateGas'))
  }

  public getTransaction (requestPayload: RequestGetTransaction): Promise<ResponseGetTransactionEth> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'getTransaction'))
  }

  public call (requestPayload: object): Promise<object> {
    return this.client.post('/rpc', this.buildPayload(requestPayload, 'call'))
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
