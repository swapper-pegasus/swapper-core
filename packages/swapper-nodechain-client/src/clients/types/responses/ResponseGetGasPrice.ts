import { BaseResponse } from './BaseResponse'
export type ResponseGetGasPrice = BaseResponse & {
    result: {
        gasPrice: number
    }
}
