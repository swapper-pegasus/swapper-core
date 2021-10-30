import { BaseResponse } from './BaseResponse'
export type ResponseGetAddressHistory = BaseResponse & {
    result: {
        txHashes: Array<string>;
    }
};
