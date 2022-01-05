import { BaseResponse } from './BaseResponse'
export type ResponseGetAddressBalance = BaseResponse & {
    result: {
        confirmed: string,
        unconfirmed: string
    };
};
