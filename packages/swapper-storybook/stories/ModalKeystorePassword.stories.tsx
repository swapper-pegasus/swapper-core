import React from 'react'
import { ModalKeystorePassword } from '@swapper-org/swapper-components'
import keystore from './keystore-swapper.json'

export default {
  component: ModalKeystorePassword,
  title: 'ModalKeystorePassword',
  argTypes: {
    getSecretPhrase: {
      type: 'boolean'
    },
    keystore: {
      type: 'object'
    }
  }
}

const Template = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <div id='modalContainer'></div>
      <ModalKeystorePassword {...args} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  getSecretPhrase: false,
  keystore: keystore,
  onGetSecretPhrase: (phrase) => console.log(phrase)
}
