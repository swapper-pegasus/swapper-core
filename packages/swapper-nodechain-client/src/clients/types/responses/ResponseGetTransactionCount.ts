import { BaseResponse } from './BaseResponse'
export type ResponseGetTransactionCount = BaseResponse & {
    result: {
        transactionCount: number
    };
};
