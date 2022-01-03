import { BaseResponse } from './BaseResponse'

type UtxoStatus = {
    blockHeight: number,
    confirmed: boolean,
}

type Utxo = {
    status: UtxoStatus,
    txHash: string,
    value: number,
    vout: number,
}

export type ResponseGetAddressUnspent = BaseResponse & {
    result: Array<Utxo>;
};
