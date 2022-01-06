import * as Wallets from '@swapper-org/swapper-wallets'
import { SUPPORTED_TOKENS, MAP_WALLET_CONSTRUCTORS } from '../constants'

type TokenAddresses = {
    symbol: string,
    addresses: Array<string>
}

async function getTokenAddresses (tokenSymbol: string, phrase: string): Promise<TokenAddresses> {
  console.log(phrase)
  const walletInstance: Wallets.IWallet = new Wallets[MAP_WALLET_CONSTRUCTORS[tokenSymbol]](
    process.env[`${tokenSymbol.toUpperCase()}_NODE`],
    Number(process.env[`${tokenSymbol.toUpperCase()}_NETWORK`]),
    'mobile way service edge man luggage hospital garden dolphin flag never insect' // TODO: Replace with real phrase
  )
  const addresses = await walletInstance.getAddresses()
  return {
    symbol: tokenSymbol,
    addresses: addresses
  }
}

async function getAddresses (phrase: string): Promise<TokenAddresses[]> {
  const addressesPromises: Promise<TokenAddresses>[] =
    SUPPORTED_TOKENS.map((symbol) => {
      return getTokenAddresses(symbol, phrase)
    })

  const addresses: TokenAddresses[] = await Promise.all(
    addressesPromises
  )

  return addresses
}

export { getAddresses, TokenAddresses }
