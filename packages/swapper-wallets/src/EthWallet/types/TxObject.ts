import BN from 'bignumber.js'
import { PrefixedHexString } from 'ethereumjs-util'
export type TxObjectDescription = {
    from: PrefixedHexString,
    value: BN,
    to: PrefixedHexString,
    data?: PrefixedHexString,
}
