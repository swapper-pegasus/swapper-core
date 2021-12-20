import React from 'react'
import { Alert } from '@swapper-org/swapper-elements'
export default {
  component: Alert,
  title: 'Alert',
  argTypes: {
    type: {
      options: ['warning', 'success', 'error'],
      control: { type: 'radio' }
    },
    title: {
      type: 'text'
    },
    description: {
      type: 'text'
    }
  }
}

const Template = (args) => <Alert {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'warning',
  title: 'Title',
  description: 'Description'
}
