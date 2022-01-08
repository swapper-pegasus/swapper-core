import { ResponseBroadcastTransaction } from '@swapper-org/swapper-nodechain-client'
import { TxObjectDescription } from '../EthWallet/types/TxObject'
import { WalletBalance } from '../EthWallet/types/WalletBalance'

export interface IWallet {
    transfer(txObject: TxObjectDescription): Promise<ResponseBroadcastTransaction>
    getAddresses(): Promise<Array<string>>
    getBalance(): Promise<WalletBalance>
}
