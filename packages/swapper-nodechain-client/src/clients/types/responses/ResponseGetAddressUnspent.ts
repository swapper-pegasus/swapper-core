import { BaseResponse } from './BaseResponse'

type UtxoStatus = {
    blockHeight: string,
    confirmed: boolean,
}

type Utxo = {
    status: UtxoStatus,
    txHash: string,
    value: string,
    vout: string,
}

export type ResponseGetAddressUnspent = BaseResponse & {
    result: Array<Utxo>;
};
