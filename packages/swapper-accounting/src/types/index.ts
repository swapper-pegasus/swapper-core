import { Token } from '@swapper-org/swapper-coingecko-client'
import { WalletBalance } from '@swapper-org/swapper-wallets'

export type WalletTokenBalanceData = {
    balance: WalletBalance; // Mayor units
    token: Token;
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
