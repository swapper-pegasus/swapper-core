import { AxiosClient } from 'src/http'
import SwapperCoingeckoClient, { USD_SYMBOL } from '../SwapperCoingeckoClient'
import SwapperCoingeckoConfigBuilder from '../../SwapperCoingeckoConfigBuilder'
import SwapperCoingeckoHandler from '../../SwapperCoingeckoHandler'

class DefaultHttpClient {
  public get (): Promise<Array<object>> {
    return new Promise((resolve) => resolve([
      {
        id: 'tether',
        name: 'Thether',
        symbol: 'usdt'
      },
      {
        id: 'binance-usd',
        name: 'Binance USD',
        symbol: 'busd'
      }
    ]))
  }
}

const roundPrices = (tokens: object): Array<number> => {
  return Object.values(tokens).map(value => Math.round(value[USD_SYMBOL]))
}

describe('SwapperCoingeckoClient', () => {
  describe('getTokenPrice', () => {
    // It's hitting real endpoint
    it('success', async () => {
      const coingeckoClient: SwapperCoingeckoClient = new SwapperCoingeckoClient('https://api.coingecko.com/api/v3')
      const result = await coingeckoClient.getTokensPriceInUsd({ tokens: ['usdt', 'usdc', 'busd'] })
      expect(roundPrices(result)).toMatchSnapshot()
    })
    it('not supported token', async () => {
      const coingeckoClient: SwapperCoingeckoClient = new SwapperCoingeckoClient('https://api.coingecko.com/api/v3')
      const result = await coingeckoClient.getTokensPriceInUsd({ tokens: ['invent', 'usdc', 'busd'] })
      expect(roundPrices(result)).toMatchSnapshot()
    })
  })
  it('getTokens', async () => {
    // TODO: Better mock strategy for testing APIs
    const handler = new SwapperCoingeckoHandler()
    const builder = new SwapperCoingeckoConfigBuilder({ baseUrl: 'https://fake.api/api/v3' })
    const coingeckoClient: SwapperCoingeckoClient = new SwapperCoingeckoClient(
      'https://api.coingecko.com/api/v3',
      builder,
      handler,
      new DefaultHttpClient() as unknown as AxiosClient
    )
    const result = await coingeckoClient.getTokens()
    expect(result).toMatchSnapshot()
  })
})
