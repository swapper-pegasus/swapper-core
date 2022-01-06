/* eslint-disable @typescript-eslint/no-var-requires */
import * as Constans from '../../constants'

describe('Wallet', () => {
  beforeEach(() => jest.resetModules())
  it('getBalances', async () => {
    jest.mock('../../constants.ts', () => ({
      ...Constans,
      SUPPORTED_TOKENS: [Constans.SYMBOL_ETH, Constans.SYMBOL_BTC],
      MAP_WALLET_CONSTRUCTORS: {
        [Constans.SYMBOL_ETH]: Constans.WALLET_ETH,
        [Constans.SYMBOL_BTC]: Constans.WALLET_BTC
      }
    }))
    const { getBalances } = require('../wallet.ts')
    const result = await getBalances('')
    expect(result).toMatchSnapshot()
  })
  it('throw error if there is not wallet for token symbol', async () => {
    jest.mock('../../constants.ts', () => ({
      ...Constans,
      SUPPORTED_TOKENS: ['RRR']
    }))
    try {
      const { getBalances } = require('../wallet.ts')
      await getBalances('')
    } catch (e) {
      expect(e).toMatchSnapshot()
    }
  })
  it('missing symbol on coingecko response', async () => {
    jest.mock('../../constants.ts', () => ({
      ...Constans,
      SUPPORTED_TOKENS: [Constans.SYMBOL_ETH, Constans.SYMBOL_BTC, 'RRR'],
      MAP_WALLET_CONSTRUCTORS: {
        [Constans.SYMBOL_ETH]: Constans.WALLET_ETH,
        [Constans.SYMBOL_BTC]: Constans.WALLET_BTC,
        RRR: Constans.WALLET_BTC
      }
    }))
    try {
      const { getBalances } = require('../wallet.ts')
      await getBalances('')
    } catch (e) {
      expect(e).toMatchSnapshot()
    }
  })
})
