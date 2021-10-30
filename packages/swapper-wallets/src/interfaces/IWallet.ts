export interface IWallet {
    transfer(txObject: object): Promise<object>
}
