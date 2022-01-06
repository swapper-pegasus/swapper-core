/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import {
  IWallet,
  WalletBalance
} from '@swapper-org/swapper-wallets'

class MockWallet implements IWallet {
  public getBalance (): Promise<WalletBalance> {
    const response: WalletBalance = { confirmed: '0x1', unconfirmed: '0x0' }
    return new Promise((resolve) => resolve(response))
  }

  public transfer (): Promise<Object> {
    console.log('MOCK NOT IMPLEMENTED')
    return new Promise((resolve) => resolve({}))
  }

  public getAddresses (): Promise<string[]> {
    const response: string[] = ['Address 1', 'Address 2']
    return new Promise((resolve) => resolve(response))
  }
}

const EthWallet = MockWallet
const BtcWallet = MockWallet

export { EthWallet, BtcWallet }
