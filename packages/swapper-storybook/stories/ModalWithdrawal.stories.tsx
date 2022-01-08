import React, { useState } from 'react'
import { ModalWithdrawal } from '@swapper-org/swapper-components'
import { Button } from '@swapper-org/swapper-elements'

export default {
  component: ModalWithdrawal,
  title: 'ModalWithdrawal'
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ width: '100%' }}>
      <div id='modalContainer'></div>
      { !isOpen && <Button onClick={() => setIsOpen(true)}>Open</Button> }
      <ModalWithdrawal
        address={args.address}
        tokenName={args.tokenName}
        balance={args.balance}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSend={(address, amount) => {
          console.log('address', address, 'amount', amount)
          setIsOpen(false)
        }}
      />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  address: '0xAaAa',
  tokenName: 'Ethereum',
  balance: { confirmed: '1.123', unconfirmed: '0' }
}
