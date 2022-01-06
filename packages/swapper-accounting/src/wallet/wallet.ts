import {
  ResponseGetTokenPrice,
  Token
} from '@swapper-org/swapper-coingecko-client'
import { WalletBalance } from '@swapper-org/swapper-wallets'
import BN from 'bignumber.js'
import * as Wallets from '@swapper-org/swapper-wallets'
import { getSupportedTokenPriceInUsd, getTokensDataBySymbol } from './price'
import { SUPPORTED_TOKENS, DEFAULT_TOKEN, DEFAULT_BALANCE, MAP_WALLET_CONSTRUCTORS } from '../constants'
import converters from '../converters'
import { WalletTokenBalanceData } from '../types'

type TokenBalance = {
  symbol: string,
  balance: WalletBalance
}

function buildTokenData (
  token: Token,
  balance: WalletBalance,
  pricesInUsd: string
): WalletTokenBalanceData {
  return {
    balance: {
      confirmed: converters[token.symbol].fromMinorToMayor(balance.confirmed),
      unconfirmed: converters[token.symbol].fromMinorToMayor(balance.unconfirmed)
    },
    name: token.name || '-',
    symbol: token.symbol || '-',
    priceInUsd: pricesInUsd,
    percentageOfPortfolio: '-'
  }
}

async function getTokenBalance (tokenSymbol: string, phrase: string): Promise<TokenBalance> {
  console.log('Real phrase:', phrase)
  if (!Wallets[MAP_WALLET_CONSTRUCTORS[tokenSymbol]]) {
    throw new Error(`Not wallet defined for token ${tokenSymbol}`)
  }
  if (!converters[tokenSymbol]) {
    throw new Error(`Not converter defined for token ${tokenSymbol}`)
  }
  if (!process.env[`${tokenSymbol.toUpperCase()}_NODE`] || !Number(process.env[`${tokenSymbol.toUpperCase()}_NETWORK`])) {
    throw new Error(`Not env vars defined for token ${tokenSymbol}`)
  }
  const walletInstance: Wallets.IWallet = new Wallets[MAP_WALLET_CONSTRUCTORS[tokenSymbol]](
    process.env[`${tokenSymbol.toUpperCase()}_NODE`],
    Number(process.env[`${tokenSymbol.toUpperCase()}_NETWORK`]),
    'mobile way service edge man luggage hospital garden dolphin flag never insect' // TODO: Replace with real phrase
  )
  const balance = await walletInstance.getBalance()
  return {
    symbol: tokenSymbol,
    balance
  }
}

function getTotalBalanceInUsd (
  walletTokenBalancesData: WalletTokenBalanceData[]
) {
  return walletTokenBalancesData
    .reduce((totalInUsd, walletTokenBalanceData) => {
      const tokenBalanceInUsd = new BN(
        walletTokenBalanceData.balance.confirmed
      ).times(walletTokenBalanceData.priceInUsd)
      return totalInUsd.plus(tokenBalanceInUsd)
    }, new BN('0'))
    .toFixed(2)
}

function getPortfolioPercentage (
  walletTokenBalancesData: WalletTokenBalanceData[]
): WalletTokenBalanceData[] {
  const totalBalanceInUsd: string = getTotalBalanceInUsd(
    walletTokenBalancesData
  )
  return walletTokenBalancesData.map((walletTokenBalanceData) => {
    const tokenValueInUsd = new BN(
      walletTokenBalanceData.balance.confirmed
    ).times(walletTokenBalanceData.priceInUsd)
    return {
      ...walletTokenBalanceData,
      percentageOfPortfolio: tokenValueInUsd
        .div(totalBalanceInUsd)
        .times(100)
        .toFixed(0)
    }
  })
}

async function getBalances (phrase: string): Promise<WalletTokenBalanceData[]> {
  const pricesInUsd: ResponseGetTokenPrice =
      await getSupportedTokenPriceInUsd()

  const balancesPromises: Promise<TokenBalance>[] =
      SUPPORTED_TOKENS.map((symbol) => {
        return getTokenBalance(symbol, phrase)
      })

  const balances: TokenBalance[] = await Promise.all(
    balancesPromises
  )

  const tokens: Array<Token> = await getTokensDataBySymbol()

  const tokensData = SUPPORTED_TOKENS.map((tokenSymbol) => {
    const tokenData = tokens.find((token) => token.symbol === tokenSymbol) || DEFAULT_TOKEN
    const findBalance = balances.find((balance) => balance.symbol === tokenSymbol)?.balance || DEFAULT_BALANCE
    return buildTokenData(
      tokenData,
      findBalance,
      pricesInUsd[tokenData.id].usd
    )
  })

  const tokensDataWithPercentage = getPortfolioPercentage(tokensData)

  return tokensDataWithPercentage
}

export { getBalances, WalletTokenBalanceData }
