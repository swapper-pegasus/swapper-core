import { WalletBalance } from '@swapper-org/swapper-wallets'
export type WalletTokenBalanceData = {
    balance: WalletBalance; // Mayor units
    name: string;
    symbol: string;
    priceInUsd: string;
    percentageOfPortfolio: string;
};

export type Converters = {
    fromMinorToMayor: (amount: string) => string;
    fromMayorToMinor: (amount: string) => string;
}

export type TokenAddresses = {
    symbol: string,
    addresses: Array<string>
}
