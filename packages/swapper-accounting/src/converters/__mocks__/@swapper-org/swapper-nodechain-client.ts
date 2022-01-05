/* eslint-disable comma-spacing */
import {
  ResponseGetGasPrice,
  ResponseGetTransactionCount,
  ResponseEstimateGas,
  ResponseBroadcastTransaction,
  ResponseGetAddressesBalance
} from '@swapper-org/swapper-nodechain-client'
export class SwapperNodechainEthClient {
  public broadcastTransaction (): Promise<ResponseBroadcastTransaction> {
    const response: ResponseBroadcastTransaction = { id: 1, jsonrpc: 'broadcastTransaction', result: { broadcasted: '0x213123123123123' } }
    return new Promise((resolve) => resolve(response))
  }

  public getGasPrice (): Promise<ResponseGetGasPrice> {
    const response: ResponseGetGasPrice = { id: 1, jsonrpc: 'getGasPrice', result: { gasPrice: '0xDEAD' } }
    return new Promise((resolve) => resolve(response))
  }

  public getTransactionCount (): Promise<ResponseGetTransactionCount> {
    const response: ResponseGetTransactionCount = { id: 1, jsonrpc: 'getTransactionCount', result: { transactionCount: '0x0' } }
    return new Promise((resolve) => resolve(response))
  }

  public getAddressesBalance (): Promise<ResponseGetAddressesBalance> {
    const response: ResponseGetAddressesBalance = { id: 1, jsonrpc: 'getAddressesBalance', result: [{ address: '0xFFF', balance: { confirmed: '0x1', unconfirmed: '0x0' } }] }
    return new Promise((resolve) => resolve(response))
  }

  public estimateGas (): Promise<ResponseEstimateGas> {
    const response: ResponseEstimateGas = { id: 1, jsonrpc: 'estimateGas', result: { estimatedGas: '0x12313' } }
    return new Promise((resolve) => resolve(response))
  }
}
