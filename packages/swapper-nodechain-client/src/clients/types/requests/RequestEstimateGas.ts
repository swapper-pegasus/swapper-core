type Transaction = {
    from: string,
    value: string,
    gasPrice: string,
    to: string,
    data: string,
    nonce: string
}

export type RequestEstimateGas = {
    tx: Transaction
};
