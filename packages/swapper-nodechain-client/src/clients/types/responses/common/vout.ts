type scriptPubKey = {
    addresses: Array<string>,
    asm: string,
    hex: string,
    reqSigs: number,
    type: string,
}

export type vout = {
    n: number,
    scriptPubKey: scriptPubKey,
    value: number,
}
