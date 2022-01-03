import { BaseResponse } from './BaseResponse'
export type ResponseGetAddressBalance = BaseResponse & {
    result: {
        confirmed: number,
        unconfirmed: number
    };
};
