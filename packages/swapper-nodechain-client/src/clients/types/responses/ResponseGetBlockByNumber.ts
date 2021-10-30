import { BaseResponse } from './BaseResponse'
import { vin } from './common/vin'
import { vout } from './common/vout'
import { TransactionEth } from './common/TransactionEth'
type TransactionBtc = {
    hash: string,
    hex: string,
    locktime: number,
    size: number,
    txid: string,
    version: number,
    vin: Array<vin>,
    vout: Array<vout>,
    vsize: number,
    weight: number,
}

export type ResponseGetBlockByNumberBtc = BaseResponse & {
    result: {
        bits: string,
        chainwork: string,
        confirmations: number,
        difficulty: number,
        hash: string,
        height: number,
        mediantime: number,
        merkleroot: string,
        nTx: number,
        nextblockhash: string,
        nonce: number,
        previousblockhash: string,
        size: number,
        strippedsize: number,
        time: number,
        tx: Array<TransactionBtc>,
        version: number,
        versionHex: string,
        weight: number,
    };
};
export type ResponseGetBlockByNumberEth = BaseResponse & {
    result: TransactionEth;
};
