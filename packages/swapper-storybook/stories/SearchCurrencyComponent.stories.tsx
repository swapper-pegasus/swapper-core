import React from 'react'
import { SearchCurrencyComponent } from '@swapper-org/swapper-components'
export default {
  component: SearchCurrencyComponent,
  title: 'SearchCurrencyComponent'
}

const Template = (args) => {
  return (
    <div className='container mx-auto border rounded border-black p-3' style={{ width: '350px' }}>
      <div className='flex flex-col content-center items-center'>
        <SearchCurrencyComponent {...args} />
      </div>
    </div>
  )
}

export const Default = Template.bind({})

Default.args = {
  value: 'Submit',
  onChange: () => console.log('onChange'),
  currencies: [
    { name: 'Bitcoin', address: '0xBLABLABLA', logo: null },
    { name: 'Bitcoin', address: '0xBLABLABLA', logo: null },
    { name: 'Bitcoin', address: '0xBLABLABLA', logo: null }
  ]
}
