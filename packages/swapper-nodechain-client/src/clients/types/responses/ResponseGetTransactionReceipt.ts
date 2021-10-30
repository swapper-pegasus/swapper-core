import { BaseResponse } from './BaseResponse'
export type ResponseGetTransactionReceipt = BaseResponse & {
    result: {
        blockHash: string,
        blockNumber: string,
        contractAddress: string | null,
        cumulativeGasUsed: string,
        from: string,
        gasUsed: string,
        logs: Array<object>,
        logsBloom: string,
        status: string,
        to: string,
        transactionHash: string,
        transactionIndex: string,
    };
};
