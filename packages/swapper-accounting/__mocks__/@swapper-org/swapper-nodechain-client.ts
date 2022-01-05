import {
  ResponseGetAddressesBalance
} from '@swapper-org/swapper-nodechain-client'

export class SwapperNodechainEthClient {
  public getAddressesBalance (): Promise<ResponseGetAddressesBalance> {
    const response: ResponseGetAddressesBalance = {
      id: 1,
      jsonrpc: 'getAddressesBalance',
      result: [{
        address: '0xABC',
        balance: {
          confirmed: '0xA',
          unconfirmed: '0x0'
        }
      }]
    }
    return new Promise((resolve) => resolve(response))
  }
}

export class SwapperNodechainBtcClient {
  public getAddressesBalance (): Promise<ResponseGetAddressesBalance> {
    const response: ResponseGetAddressesBalance = {
      id: 1,
      jsonrpc: 'getAddressesBalance',
      result: [{
        address: 'abc',
        balance: {
          confirmed: '0x1',
          unconfirmed: '0x0'
        }
      }]
    }
    return new Promise((resolve) => resolve(response))
  }
}
