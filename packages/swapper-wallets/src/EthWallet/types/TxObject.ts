import BN from 'bn.js'
import { PrefixedHexString } from 'ethereumjs-util'
export type TxObjectDescription = {
    from: PrefixedHexString,
    value: BN,
    to: PrefixedHexString,
    data: PrefixedHexString,
}
