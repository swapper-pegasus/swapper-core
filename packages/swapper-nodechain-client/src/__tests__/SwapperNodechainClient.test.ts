import { SwapperNodechainBtcClient, SwapperNodechainEthClient } from '../index'
import { Transaction } from '@ethereumjs/tx'
import Common, { Chain } from '@ethereumjs/common'

const ethereumConfig = new Common({ chain: Chain.Ropsten })

const ethClient: SwapperNodechainEthClient = new SwapperNodechainEthClient('http://localhost:7001')
const btcClient: SwapperNodechainBtcClient = new SwapperNodechainBtcClient('http://localhost:6001')

const btcAddress = 'bcrt1q97ww9v8ux5m9s6lsgdnzpcue0q2a6t80f9hntr'
const ethAddress = '0x625ACaEdeF812d2842eFd2Fb0294682A868455bd'

const privateKeyEthAddress = '0x6fa76995e9a39e852f893e8347c662453a5d517846d150bdf3ddf7601c4bc74c'

const btcAddressB = 'bcrt1qkhn06ef3m56rfphg8e4ujdtze06q82l3sczse7'
const ethAddressB = '0x93261B4021dbd6200Df9B36B151f4ECF34889e94'

describe('SwapperNodechainClient', () => {
  describe('ETH', () => {
    it('getAddressBalance', async () => {
      const result = await ethClient.getAddressBalance({ address: ethAddress })
      expect(result).toMatchSnapshot()
    })
    it('getHeight', async () => {
      const result = await ethClient.getHeight()
      expect(result).toMatchSnapshot()
    })
    it('getBlockByNumber', async () => {
      const result = await ethClient.getBlockByNumber({ blockNumber: 1 })
      expect(result).toMatchSnapshot()
    })
    it('getBlockByHash', async () => {
      const result = await ethClient.getBlockByHash({ blockHash: '0x18bfb01b9291729857e8ee107fd01f62e71ca541ed435c23ee0e251461a5dbef' })
      expect(result).toMatchSnapshot()
    })
    it('getTransactionCount', async () => {
      const result = await ethClient.getTransactionCount({ address: ethAddress, pending: true })
      expect(result).toMatchSnapshot()
    })
    it('getGasPrice', async () => {
      const result = await ethClient.getGasPrice()
      expect(result).toMatchSnapshot()
    })
    it('getAddressesBalance', async () => {
      const result = await ethClient.getAddressesBalance({ addresses: [ethAddress, ethAddressB] })
      expect(result).toMatchSnapshot()
    })
    it('getAddressesBalance', async () => {
      const result = await ethClient.getAddressesBalance({ addresses: [ethAddress, ethAddressB] })
      expect(result).toMatchSnapshot()
    })
    it('estimateGas', async () => {
      const result = await ethClient.estimateGas(
        {
          tx: {
            from: ethAddressB,
            value: '0x0',
            gasPrice: '0x77359400',
            to: ethAddress,
            data: '',
            nonce: '0x1'
          }
        }
      )
      expect(result).toMatchSnapshot()
    })
    it('getTransactionReceipt', async () => {
      const result = await ethClient.getTransactionReceipt({ txHash: '0xc410800b56e69e14cff5171c5df3de7d0e8602f85a61513ee6e0717a736fac39' })
      expect(result).toMatchSnapshot()
    })
    it('getTransaction', async () => {
      const result = await ethClient.getTransaction({ txHash: '0xc410800b56e69e14cff5171c5df3de7d0e8602f85a61513ee6e0717a736fac39' })
      expect(result).toMatchSnapshot()
    })
    it('broadcastTransaction', async () => {
      const response = await ethClient.getTransactionCount({ address: ethAddress, pending: true })
      const finalTransaction = {
        from: ethAddressB,
        value: '0x0',
        to: ethAddress,
        data: '',
        gasPrice: '0x1',
        gasLimit: 2000000,
        nonce: response.result.transactionCount
      }
      const tx = Transaction.fromTxData(finalTransaction, {
        common: ethereumConfig
      })
      const signedTx = tx.sign(Buffer.from(privateKeyEthAddress.replace('0x', ''), 'hex'))
      const rawTransaction: string = signedTx.serialize().toString('hex')

      const result = await ethClient.broadcastTransaction({ rawTransaction: rawTransaction })
      expect(result).toMatchSnapshot()
    })
  })
  describe('BTC', () => {
    it('getHeight', async () => {
      const result = await btcClient.getHeight()
      expect(result).toMatchSnapshot()
    })
    it('getAddressBalance', async () => {
      const result = await btcClient.getAddressBalance({ address: btcAddress })
      expect(result).toMatchSnapshot()
    })
    it('getBlockByNumber', async () => {
      const result = await btcClient.getBlockByNumber({ blockNumber: 1 })
      expect(result).toMatchSnapshot()
    })
    it('getBlockByHash', async () => {
      const result = await btcClient.getBlockByHash({ blockHash: '009c7b7d91388c42c48eb136c06111b1179fd5b5241d7af339c54cb27632f8ce' })
      expect(result).toMatchSnapshot()
    })
    it('getTransactionCount', async () => {
      const result = await btcClient.getTransactionCount({ address: btcAddress, pending: true })
      expect(result).toMatchSnapshot()
    })
    it('getAddressUnspent', async () => {
      const result = await btcClient.getAddressUnspent({ address: btcAddress })
      expect(result).toMatchSnapshot()
    })
    it('getAddressesBalance', async () => {
      const result = await btcClient.getAddressesBalance({ addresses: [btcAddress, btcAddressB] })
      expect(result).toMatchSnapshot()
    })
    it('getTransaction', async () => {
      const result = await btcClient.getTransaction({ txHash: '6f637d18b414a1e696b476939e9483d2bf4d4b0d9d0457b78d17c847cedfb3ce' })
      expect(result).toMatchSnapshot()
    })
    it('getTransactionHex', async () => {
      const result = await btcClient.getTransactionHex({ txHash: '6f637d18b414a1e696b476939e9483d2bf4d4b0d9d0457b78d17c847cedfb3ce' })
      expect(result).toMatchSnapshot()
    })
    it('get', async () => {
      const result = await btcClient.getAddressHistory({ address: btcAddress })
      expect(result).toMatchSnapshot()
    })
    xit('getFeePerByte', async () => {
      const result = await btcClient.getFeePerByte({ confirmations: 1 })
      expect(result).toMatchSnapshot()
    })
    xit('broadcastTransaction', async () => {
      const result = await btcClient.broadcastTransaction({ rawTransaction: '' })
      expect(result).toMatchSnapshot()
    })
  })
})
