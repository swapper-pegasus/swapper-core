import {
  ResponseGetTokenPrice,
  Token
} from '@swapper-org/swapper-coingecko-client'
import { EthWallet, WalletBalance } from '@swapper-org/swapper-wallets'
import BN from 'bignumber.js'
import { getSupportedTokenPriceInUsd, getTokensDataBySymbol } from './price'
import { SUPPORTED_TOKENS, SYMBOL_ETH, DEFAULT_TOKEN } from '../constants'
import converters from '../converters'
import { WalletTokenBalanceData } from '../types'

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

async function getEthBalance (
  phrase: string
): Promise<Record<string, WalletBalance>> {
  console.log('Real phrase:', phrase)
  const ethWallet: EthWallet = new EthWallet(
    process.env.ETH_NODE || '',
    Number(process.env.ETH_NETWORK),
    'mobile way service edge man luggage hospital garden dolphin flag never insect' // TODO: Remove, 0xbef81b14c78ad1b0c9b0f5a5a88045c2d8baed1a
  )
  const balance = await ethWallet.getBalance()
  return { [SYMBOL_ETH]: balance }
}

const mapTokenBalance: Record<
    string,
    (phrase: string) => Promise<Record<string, WalletBalance>>
  > = {
    [SYMBOL_ETH]: getEthBalance
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

  const balancesPromises: Promise<Record<string, WalletBalance>>[] =
      SUPPORTED_TOKENS.map((symbol) => {
        return mapTokenBalance[symbol](phrase)
      })

  const balances: Record<string, WalletBalance>[] = await Promise.all(
    balancesPromises
  )

  const tokens: Array<Token> = await getTokensDataBySymbol()

  const tokensData = SUPPORTED_TOKENS.map((tokenSymbol, index) => {
    const tokenData = tokens.find((token) => token.symbol === tokenSymbol) || DEFAULT_TOKEN
    return buildTokenData(
      tokenData,
      balances[index][tokenSymbol],
      pricesInUsd[tokenData.id].usd
    )
  })

  const tokensDataWithPercentage = getPortfolioPercentage(tokensData)

  return tokensDataWithPercentage
}

export { getBalances, WalletTokenBalanceData }
