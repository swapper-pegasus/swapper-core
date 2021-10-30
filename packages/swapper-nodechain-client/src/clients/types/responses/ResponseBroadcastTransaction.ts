import { BaseResponse } from './BaseResponse'
export type ResponseBroadcastTransaction = BaseResponse & {
    result: {
        broadcasted: string
    };
};
