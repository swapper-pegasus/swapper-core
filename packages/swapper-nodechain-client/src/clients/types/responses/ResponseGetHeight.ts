import { BaseResponse } from './BaseResponse'
export type ResponseGetHeight = BaseResponse & {
    result: {
        latestBlockHash: string,
        latestBlockIndex: string
    };
};
