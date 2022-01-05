import { getSupportedTokenPriceInUsd, getTokensDataBySymbol } from '../price'

describe('Price', () => {
  it('getSupportedTokenPriceInUsd', async () => {
    const result = await getSupportedTokenPriceInUsd()
    expect(result).toMatchSnapshot()
  })
  it('getTokensDataBySymbol', async () => {
    const result = await getTokensDataBySymbol()
    expect(result).toMatchSnapshot()
  })
})
