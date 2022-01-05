/* eslint-disable import/prefer-default-export */
import {
  SwapperCoingeckoClient,
  ResponseGetTokenPrice,
  ResponseGetTokens
} from '@swapper-org/swapper-coingecko-client'
import { SUPPORTED_TOKENS } from '../constants'

const coingeckoClient: SwapperCoingeckoClient = new SwapperCoingeckoClient(
  process.env.COINGECKO_ENDPOINT || ''
)

function getSupportedTokenPriceInUsd (): Promise<ResponseGetTokenPrice> {
  return coingeckoClient.getTokensPriceInUsd({ tokens: SUPPORTED_TOKENS })
}

function getTokensDataBySymbol (): Promise<ResponseGetTokens> {
  return coingeckoClient.getTokenDataBySymbol(SUPPORTED_TOKENS)
}

export { getSupportedTokenPriceInUsd, getTokensDataBySymbol }
