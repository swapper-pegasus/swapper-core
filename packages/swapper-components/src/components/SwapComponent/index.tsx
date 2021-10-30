import React from 'react'
import { Input } from '@swapper-org/swapper-elements'

type Props = {
  tokenA: { name: string };
  tokenB: { name: string };
};

export function SwapComponent ({ tokenA, tokenB }: Props) {
  const { name: nameA } = tokenA
  const { name: nameB } = tokenB
  return (
    <div>
      <Input
        name='currencyA'
        onChange={(value: string) => console.log(value)}
        value={nameA}
      />
      <Input
        name='currencyB'
        onChange={(value: string) => console.log(value)}
        value={nameB}
      />
    </div>
  )
}
