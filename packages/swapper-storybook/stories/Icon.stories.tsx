import React from 'react'
import { Icon, types } from '@swapper-org/swapper-elements'
export default {
  component: Icon,
  title: 'Icon',
  argTypes: {
    type: {
      options: types,
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'info'
}
