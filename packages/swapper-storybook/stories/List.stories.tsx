import React from 'react'
import { List } from '@swapper-org/swapper-components'
export default {
  component: List,
  title: 'List'
}

const Template = (args) => <List {...args} />

export const Default = Template.bind({})

Default.args = {
  headers: [
    { name: 'header 1', parts: 4 },
    { name: 'header 2', parts: 3 },
    { name: 'header 3', parts: 3 },
    { name: 'header 4', parts: 2 }
  ],
  rows: [
    ['Elemente 1,1', 'Elemente 1,2', 'Elemente 1,3', 'Elemente 1,4'],
    ['Elemente 2,1', 'Elemente 2,2', 'Elemente 2,3', <div><button>Button 1</button><button>Button 2</button></div>],
    ['Elemente 3,1', 'Text long for field parts, Text long for field parts', 'Elemente 3,3', 'Elemente 3,4'],
    ['Elemente 4,1', <p className='text-swpGray'>Custom element</p>, 'Elemente 4,3', 'Elemente 4,4']
  ]
}
