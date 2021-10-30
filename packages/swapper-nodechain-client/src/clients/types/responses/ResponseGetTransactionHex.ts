import { BaseResponse } from './BaseResponse'
export type ResponseGetTransactionHex = BaseResponse & {
    result: {
        rawTransaction: string,
    };
};
