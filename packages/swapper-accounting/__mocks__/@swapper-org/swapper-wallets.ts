import {
  WalletBalance
} from '@swapper-org/swapper-wallets'
class EthWallet {
  public getBalance (): Promise<WalletBalance> {
    const response: WalletBalance = { confirmed: '0x1', unconfirmed: '0x0' }
    return new Promise((resolve) => resolve(response))
  }
}

export { EthWallet }
