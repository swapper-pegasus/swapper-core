import { BaseResponse } from './BaseResponse'
type Balance = {
    confirmed: number,
    unconfirmed: number,
}
type AddressBalance = {
    address: string,
    balance: Balance
}
export type ResponseGetAddressesBalance = BaseResponse & {
    result: Array<AddressBalance>;
};
