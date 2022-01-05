import BN from 'bignumber.js'
import { WEI, SYMBOL_ETH } from '../constants'
import { Converters } from '../types'

const covertToBigNumber = (value: string): BN => new BN(value)

const weiToEth = (amount: string) => {
  return covertToBigNumber(amount).div(WEI).toFixed(5)
}

const ethToWei = (amount: string) => {
  return covertToBigNumber(amount).times(WEI).toFixed(5)
}

const mapSymbolToConverters: Record<string, Converters> = {
  [SYMBOL_ETH]: { fromMinorToMayor: weiToEth, fromMayorToMinor: ethToWei }
}

export default mapSymbolToConverters
