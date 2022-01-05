import converters from '.'
import { WEI, SYMBOL_ETH } from '../constants'

describe('Converters', () => {
  it('tests ETH converters', () => {
    const wei = '1112300000000000000.00000'
    const eth = '1.00000'
    expect(converters[SYMBOL_ETH].fromMinorToMayor(WEI.toString())).toEqual(eth)
    expect(converters[SYMBOL_ETH].fromMayorToMinor('1.1123')).toEqual(wei)
  })
})
