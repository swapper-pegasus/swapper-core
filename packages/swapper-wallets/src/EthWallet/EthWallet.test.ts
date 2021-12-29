import { EthWallet } from '../EthWallet'
import { Chain } from '@ethereumjs/common'
import BN from 'bn.js'

const nodechainUrlServer = 'http://localhost:7001'
const ethAddress = '0x625ACaEdeF812d2842eFd2Fb0294682A868455bd'

const nmenomic = 'piece effort bind that embrace enrich remind powder sudden patient legend group'
const derivativePath = "m/44'/60'/0'/0/0"

const ethAddressB = '0x93261B4021dbd6200Df9B36B151f4ECF34889e94'

describe('EthWallet', () => {
  it('transfer', async () => {
    const ethWallet = new EthWallet(nodechainUrlServer, Chain.Ropsten, nmenomic, derivativePath)
    const result = await ethWallet.transfer({ from: ethAddress, to: ethAddressB, value: new BN('1000000000000000000'), data: '' })
    expect(result).toMatchSnapshot()
  })
  it('getAddresses', async () => {
    const ethWallet = new EthWallet(nodechainUrlServer, Chain.Ropsten, nmenomic, derivativePath)
    const result = await ethWallet.getAddresses()
    expect(result).toMatchSnapshot()
  })
  it('getBalance', async () => {
    const ethWallet = new EthWallet(nodechainUrlServer, Chain.Ropsten, nmenomic, derivativePath)
    const result = await ethWallet.getBalance()
    expect(result).toMatchSnapshot()
  })
  it('exportPrivateKey', async () => {
    const ethWallet = new EthWallet(nodechainUrlServer, Chain.Ropsten, nmenomic, derivativePath)
    const result = await ethWallet.exportPrivateKey()
    expect(result).toMatchSnapshot()
  })
})
