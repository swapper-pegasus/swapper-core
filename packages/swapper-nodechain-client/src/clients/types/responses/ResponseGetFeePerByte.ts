import { BaseResponse } from './BaseResponse'
export type ResponseGetFeePerByte = BaseResponse & {
    result: {
        feePerByte: number
    }
}
