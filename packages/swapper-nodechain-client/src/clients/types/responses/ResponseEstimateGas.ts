import { BaseResponse } from './BaseResponse'
export type ResponseEstimateGas = BaseResponse & {
    result: {
        estimatedGas: number
    };
};
