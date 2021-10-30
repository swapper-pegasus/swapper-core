import React, { useState } from 'react'
import { Input, Button } from '@swapper-org/swapper-elements'

type Currency = {
  name: string
}

type Props = {
  currencies: Array<Currency>,
};

export function SearchCurrencyComponent ({ currencies = [] }: Props) {
  const [userInputCurrency, onChangeUserInputCurrency] = useState('')

  return (
    <div className='flex flex-col content-center items-center w-3/4'>
      <p className='w-full text-red-700'>Select token</p>
      <div className='w-full'>
        <Input
          name='name'
          onChange={(value: string) => onChangeUserInputCurrency(value)}
          placeholder='Select name'
          value={userInputCurrency}
        />
      </div>
      <div className='w-full'>
        {
          currencies.map(({ name }) => {
            return <div className='flex content-start items-start'>
                <p className='overflow-ellipsis text-left'>{name}</p>
            </div>
          })
        }
      </div>
      <div>
        <Button onClick={() => { console.log('onClick') }}>
          <p>Administrar listas de tokens</p>
        </Button>
      </div>
    </div>
  )
}
