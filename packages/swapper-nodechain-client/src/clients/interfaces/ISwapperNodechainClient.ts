import {
  // RESSPONSE
  ResponseGetAddressBalance,
  ResponseGetHeight,
  ResponseGetBlockByNumberBtc,
  ResponseGetBlockByNumberEth,
  ResponseGetBlockByHashBtc,
  ResponseGetBlockByHashEth,
  ResponseGetTransactionCount,
  ResponseGetGasPrice,
  ResponseGetAddressUnspent,
  ResponseGetAddressesBalance,
  ResponseGetTransactionReceipt,
  ResponseEstimateGas,
  ResponseGetTransactionBtc,
  ResponseGetTransactionEth,
  ResponseGetTransactionHex,
  ResponseGetAddressHistory,
  ResponseBroadcastTransaction,
  // REQUEST
  RequestGetBlockByNumber,
  RequestGetFeePerByte,
  RequestGetAddressBalance,
  RequestBroadcastTransaction,
  RequestGetBlockByHash,
  RequestGetTransactionCount,
  RequestGetAddressUnspent,
  RequestGetTransactionReceipt,
  RequestGetAddressesBalance,
  RequestEstimateGas,
  RequestGetTransaction,
  RequestGetAddressHistory
} from '../types'
export default interface ISwapperNodechainClient {
    // Common methods
    getAddressBalance(requestPayload: RequestGetAddressBalance): Promise<ResponseGetAddressBalance>
    getHeight(): Promise<ResponseGetHeight>
    getBlockByNumber(requestPayload: RequestGetBlockByNumber): Promise<ResponseGetBlockByNumberBtc | ResponseGetBlockByNumberEth>
    getBlockByHash(requestPayload: RequestGetBlockByHash): Promise<ResponseGetBlockByHashBtc | ResponseGetBlockByHashEth>
    getTransactionCount(requestPayload: RequestGetTransactionCount): Promise<ResponseGetTransactionCount>
    getAddressesBalance?(requestPayload: RequestGetAddressesBalance): Promise<ResponseGetAddressesBalance>
    getTransaction?(requestPayload: RequestGetTransaction): Promise<ResponseGetTransactionEth | ResponseGetTransactionBtc>
    broadcastTransaction(requestPayload: RequestBroadcastTransaction): Promise<ResponseBroadcastTransaction>
    // BTC Methods
    getAddressUnspent?(requestPayload: RequestGetAddressUnspent): Promise<ResponseGetAddressUnspent>
    getTransactionHex?(requestPayload: RequestGetTransaction): Promise<ResponseGetTransactionHex>
    getAddressHistory?(requestPayload: RequestGetAddressHistory): Promise<ResponseGetAddressHistory>
    getFeePerByte?(requestPayload: RequestGetFeePerByte): Promise<object>
    // ETH Methods
    getGasPrice?(): Promise<ResponseGetGasPrice>
    getTransactionReceipt?(requestPayload: RequestGetTransactionReceipt): Promise<ResponseGetTransactionReceipt>
    estimateGas?(requestPayload: RequestEstimateGas): Promise<ResponseEstimateGas>
    call?(requestPayload: object): Promise<object>
}
