import { BaseResponse } from './BaseResponse'
import { vin } from './common/vin'
import { vout } from './common/vout'
import { TransactionEth } from './common/TransactionEth'
export type ResponseGetTransactionBtc = BaseResponse & {
    result: {
        hash: string,
        locktime: number,
        size: number,
        txid: string,
        version: number,
        vin: Array<vin>,
        vout: Array<vout>,
        vsize: number,
        weight: number,
    };
};

type input = {
    address: string,
    amount: number
}

type output = {
    address: string,
    amount: number
}

export type ResponseGetTransactionEth = BaseResponse & {
    result: {
        inputs: Array<input>,
        outputs: Array<output>,
        transaction: TransactionEth
    };
};
