import {
  SwapperNodechainEthClient,
  ResponseBroadcastTransaction,
  ResponseGetAddressesBalance
} from '@swapper-org/swapper-nodechain-client'
import { IWallet } from '../interfaces/IWallet'
import { TxObjectDescription } from './types/TxObject'
import { Transaction } from '@ethereumjs/tx'
import Common, { Chain } from '@ethereumjs/common'
import { Address, PrefixedHexString, bnToHex, privateToAddress } from 'ethereumjs-util'
import { mnemonicToSeed } from 'bip39'
import hdkey from 'hdkey'
import BN from 'bn.js'

export class EthWallet implements IWallet {
  private nodechainClientInstance: SwapperNodechainEthClient
  private ethereumConfig: Common
  private mnemonic: string
  private derivationPath: string

  constructor (
    nodechainServerUrl: string,
    chain: Chain,
    mnemonic: string,
    derivationPath: string
  ) {
    this.nodechainClientInstance = new SwapperNodechainEthClient(
      nodechainServerUrl
    )
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

  public async transfer (
    txObjectDescription: TxObjectDescription
  ): Promise<ResponseBroadcastTransaction> {
    const hdKey = await this.hdKey()
    const valueHexFormat: PrefixedHexString = bnToHex(
      txObjectDescription.value
    )
    const getTransactionCountResponse =
              await this.nodechainClientInstance.getTransactionCount({
                address: txObjectDescription.from,
                pending: true
              })
    const gasPriceResponse =
              await this.nodechainClientInstance.getGasPrice()
    const gasEstimationResponse =
              await this.nodechainClientInstance.estimateGas({
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

    const tx = Transaction.fromTxData(finalTransaction, {
      common: this.ethereumConfig
    })

    const signedTx = tx.sign(hdKey.privateKey)
    const rawTransaction: string = signedTx.serialize().toString('hex')

    const result = await this.nodechainClientInstance.broadcastTransaction({
      rawTransaction
    })
    return result
  }

  public async getAddresses (): Promise<string[]> {
    const hdKey = await this.hdKey()
    const address = new Address(privateToAddress(hdKey.privateKey))
    return [address.toString()]
  }

  public async getBalance (): Promise<string> {
    const addresses: string[] = await this.getAddresses()
    const balances: ResponseGetAddressesBalance = await this.nodechainClientInstance.getAddressesBalance({ addresses })
    const totalBalance: BN = balances.result.reduce((currentBalance, nextBalance) => {
      const balanceConfirmed = new BN(nextBalance.balance.confirmed.replace('0x', ''), 16)
      return currentBalance.add(balanceConfirmed)
    }, new BN('0'))
    return totalBalance.toString(10) // Returns in wei
  }
}