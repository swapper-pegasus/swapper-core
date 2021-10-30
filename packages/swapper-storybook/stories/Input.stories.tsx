import React from 'react'
import { Input } from '@swapper-org/swapper-elements'
export default {
  component: Input,
  title: 'Input',
  argTypes: {
    type: {
      options: ['primary', 'link'],
      control: { type: 'radio' }
    },
    label: {
      type: 'text'
    },
    disabled: {
      type: 'boolean'
    },
    value: {
      type: 'text'
    },
    placeholder: {
      type: 'text'
    },
    error: {
      type: 'text'
    }
  }
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})

let value = ''

Default.args = {
  value: value,
  placeholder: 'Placeholder',
  onChange: (newValue) => { value = newValue },
  label: 'Label',
  disabled: true,
  error: 'Error message'
}
