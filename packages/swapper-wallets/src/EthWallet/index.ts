import { SwapperNodechainEthClient } from '@swapper-org/swapper-nodechain-client'
import { IWallet } from '../interfaces/IWallet'
import { TxObjectDescription } from './types/TxObject'
import { Transaction } from '@ethereumjs/tx'
import Common, { Chain } from '@ethereumjs/common'
import { PrefixedHexString, bnToHex } from 'ethereumjs-util'
import { mnemonicToSeed } from 'bip39'
import hdkey from 'hdkey'

export class EthWallet implements IWallet {
  private nodechainClientInstance: SwapperNodechainEthClient
  private ethereumConfig: Common
  private mnemonic: string
  private derivationPath: string

  constructor (nodechainServerUrl: string, chain: Chain, mnemonic: string, derivationPath: string) {
    this.nodechainClientInstance = new SwapperNodechainEthClient(nodechainServerUrl)
    this.ethereumConfig = new Common({ chain })
    this.derivationPath = derivationPath
    this.mnemonic = mnemonic
  }

  private async node () {
    const seed = await mnemonicToSeed(this.mnemonic)
    return hdkey.fromMasterSeed(seed)
  }

  private async hdKey () {
    const node = await this.node()
    return node.derive(this.derivationPath)
  }

  public async exportPrivateKey () {
    const { privateKey } = await this.hdKey()
    return privateKey.toString('hex')
  }

  public async transfer (txObjectDescription: TxObjectDescription): Promise<object> {
    const hdKey = await this.hdKey()
    const valueHexFormat: PrefixedHexString = bnToHex(txObjectDescription.value)
    const getTransactionCountResponse = await this.nodechainClientInstance.getTransactionCount({ address: txObjectDescription.from, pending: true })
    const gasPriceResponse = await this.nodechainClientInstance.getGasPrice()

    const gasEstimationResponse = await this.nodechainClientInstance.estimateGas({
      tx: {
        gasPrice: gasPriceResponse.result.gasPrice,
        nonce: getTransactionCountResponse.result.transactionCount,
        from: txObjectDescription.from,
        to: txObjectDescription.to,
        data: txObjectDescription.data,
        value: valueHexFormat
      }
    })

    const finalTransaction = {
      ...txObjectDescription,
      gasPrice: gasPriceResponse.result.gasPrice,
      value: valueHexFormat,
      gasLimit: gasEstimationResponse.result.estimatedGas,
      nonce: Number(getTransactionCountResponse.result.transactionCount)
    }

    const tx = Transaction.fromTxData(finalTransaction, { common: this.ethereumConfig })

    const signedTx = tx.sign(hdKey.privateKey)
    const rawTransaction: string = signedTx.serialize().toString('hex')

    const result = await this.nodechainClientInstance.broadcastTransaction({ rawTransaction })
    return result
  }
}
