import { getAddresses } from '../address'

describe('Addresses', () => {
  it('getAllAddresses', async () => {
    const result = await getAddresses('mobile way service edge man luggage hospital garden dolphin flag never insect')
    expect(result).toMatchSnapshot()
  })
})
