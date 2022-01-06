import * as Wallets from '@swapper-org/swapper-wallets'
import { SUPPORTED_TOKENS, SYMBOL_ETH } from '../constants'

type TokenAddresses = {
    symbol: string,
    addresses: Array<string>
}

const mapWalletConstructors: Record<string, string> = {
  [SYMBOL_ETH]: 'EthWallet',
  btc: 'BtcWallet'
}

async function getTokenAddresses (tokenSymbol: string, phrase: string): Promise<TokenAddresses> {
  console.log(phrase, Wallets)
  const walletInstance: Wallets.IWallet = new Wallets[mapWalletConstructors[tokenSymbol]](
    process.env[`${tokenSymbol.toUpperCase()}_NODE`],
    Number(process.env[`${tokenSymbol.toUpperCase()}_NETWORK`]),
    'mobile way service edge man luggage hospital garden dolphin flag never insect'
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
