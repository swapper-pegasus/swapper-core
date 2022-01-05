import { getBalances } from '../wallet'

describe('Wallet', () => {
  it('getBalances', async () => {
    const result = await getBalances('')
    expect(result).toMatchSnapshot()
  })
})
