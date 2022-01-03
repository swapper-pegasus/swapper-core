import React, { useState } from 'react'
import { ModalKeystorePassword } from '@swapper-org/swapper-components'
import { Button } from '@swapper-org/swapper-elements'
import keystore from './keystore-swapper.json'

export default {
  component: ModalKeystorePassword,
  title: 'ModalKeystorePassword',
  argTypes: {
    keystore: {
      type: 'object'
    }
  }
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <div style={{ width: '900px' }}>
            <div id="modalContainer"></div>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <ModalKeystorePassword
                keystore={args.keystore}
                onGetSecretPhrase={args.onGetSecretPhrase}
                getSecretPhrase={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  keystore: keystore,
  onGetSecretPhrase: (phrase) => console.log(phrase)
}
