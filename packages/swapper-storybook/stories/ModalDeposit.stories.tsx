import React, { useState } from 'react'
import { ModalDeposit } from '@swapper-org/swapper-components'
import { Button } from '@swapper-org/swapper-elements'

export default {
  component: ModalDeposit,
  title: 'ModalDeposit'
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ width: '900px' }}>
      <div id='modalContainer'></div>
      { !isOpen && <Button onClick={() => setIsOpen(true)}>Open</Button> }
      <ModalDeposit tokenName={args.tokenName} address={args.address} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  address: '0xAAAAAAAAAAAAAAAAA',
  tokenName: 'Ethereum',
  onClose: () => console.log('onClick')
}
