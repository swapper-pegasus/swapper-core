import { WalletBalance } from '../EthWallet/types/WalletBalance'

export interface IWallet {
    transfer(txObject: object): Promise<object>
    getAddresses(): Promise<Array<string>>
    getBalance(): Promise<WalletBalance>
}
