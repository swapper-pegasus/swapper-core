/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { ResponseBroadcastTransaction } from '@swapper-org/swapper-nodechain-client'
import {
  IWallet,
  WalletBalance
} from '@swapper-org/swapper-wallets'

class MockWallet implements IWallet {
  public getBalance (): Promise<WalletBalance> {
    const response: WalletBalance = { confirmed: '0x1', unconfirmed: '0x0' }
    return new Promise((resolve) => resolve(response))
  }

  public transfer (): Promise<ResponseBroadcastTransaction> {
    return new Promise((resolve) => resolve({
      id: 1,
      jsonrpc: '123',
      result: {
        broadcasted: 'DEADADEDP'
      }
    }))
  }

  public getAddresses (): Promise<string[]> {
    const response: string[] = ['Address 1', 'Address 2']
    return new Promise((resolve) => resolve(response))
  }
}

const EthWallet = MockWallet
const BtcWallet = MockWallet

export { EthWallet, BtcWallet }
