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
      <ModalDeposit token={args.token} address={args.address} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  address: '0xAAAAAAAAAAAAAAAAA',
  token: { name: 'Ethereum', symbol: 'eth', id: '1' },
  onClose: () => console.log('onClick')
}
