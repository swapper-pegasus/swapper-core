import React from 'react'
import { Button } from '@swapper-org/swapper-elements'
export default {
  component: Button,
  title: 'Button',
  argTypes: {
    type: {
      options: ['primary', 'link'],
      control: { type: 'radio' }
    },
    disabled: {
      type: 'boolean'
    },
    withGradient: {
      type: 'boolean'
    }
  }
}

const Template = (args) => <Button {...args}>My button</Button>

export const Default = Template.bind({})

Default.args = {
  type: 'link',
  disabled: 'Disabled',
  withGradient: 'withGradient',
  onClick: () => console.log('onClick')
}
