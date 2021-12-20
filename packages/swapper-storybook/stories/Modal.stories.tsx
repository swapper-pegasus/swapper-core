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
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  isOpen: false,
  onClose: () => console.log('onClick')
}
