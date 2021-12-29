
export interface IWallet {
    transfer(txObject: object): Promise<object>
    getAddresses(): Promise<Array<string>>
    getBalance(): Promise<string>
}
