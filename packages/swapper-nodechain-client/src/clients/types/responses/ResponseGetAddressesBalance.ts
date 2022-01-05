import { BaseResponse } from './BaseResponse'
type Balance = {
    confirmed: string,
    unconfirmed: string,
}
export type AddressBalance = {
    address: string,
    balance: Balance
}
export type ResponseGetAddressesBalance = BaseResponse & {
    result: Array<AddressBalance>;
};
