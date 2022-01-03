import React, { useState } from 'react'
import { ModalInfo } from '@swapper-org/swapper-components'
import { Button } from '@swapper-org/swapper-elements'

export default {
  component: ModalInfo,
  title: 'ModalInfo',
  argTypes: {
    title: {
      type: 'text'
    },
    description: {
      type: 'text'
    }
  }
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ width: '900px' }}>
      <div id='modalContainer'></div>
      { !isOpen && <Button onClick={() => setIsOpen(true)}>Open</Button> }
      <ModalInfo title={args.title} description={args.description} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  onClose: () => console.log('onClick')
}
