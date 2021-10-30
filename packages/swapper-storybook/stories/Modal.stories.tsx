import React from 'react'
import { Modal } from '@swapper-org/swapper-elements'
export default {
  component: Modal,
  title: 'Modal',
  argTypes: {
    title: {
      type: 'text'
    },
    description: {
      type: 'text'
    },
    isOpen: {
      type: 'boolean'
    }
  }
}

const Template = (args) => {
  return (
    <div style={{ width: '900px' }}>
      <div id='modalContainer'></div>
      <Modal {...args} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
  description: 'Description',
  isOpen: false,
  onClose: () => console.log('onClick')
}
