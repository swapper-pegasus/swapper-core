import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { ModalInfo } from './ModalInfo'
import { Button, Icon } from '@swapper-org/swapper-elements'
import { render, fireEvent } from '@testing-library/react'

type Props = {
    description: string,
    onClose: () => void
}

const ModalTestComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <>
            <div data-testid='modal-container' id='modalContainer'></div>
            <Button onClick={() => setIsOpen(true)} data-testid='button-open-modal'></Button>
            <ModalInfo {...props} isOpen={isOpen} />
        </>
  )
}

const defaultProps = {
  description: 'Modal info description',
  isOpen: true,
  onClose: jest.fn()
}

function setUpRender (props: object) {
  const finalProps = {
    ...defaultProps,
    ...props
  }
  return render(
    <ModalTestComponent {...finalProps}/>
  )
}

describe('ModalInfo', () => {
  it('Render with description', () => {
    const component = setUpRender({})
    component.getByRole('button')
    fireEvent.click(component.getByRole('button'))
    expect(component.baseElement).toMatchSnapshot()
  })
  it('Render with description and title', () => {
    const component = setUpRender({ title: 'Modal title' })
    component.getByRole('button')
    fireEvent.click(component.getByRole('button'))
    expect(component.baseElement).toMatchSnapshot()
  })
  it('Render with description, title and icon', () => {
    const component = setUpRender({ title: 'Modal title', icon: <Icon className="w-5 h-5 text-warning-dark" type="info" /> })
    component.getByRole('button')
    fireEvent.click(component.getByRole('button'))
    expect(component.baseElement).toMatchSnapshot()
  })
})
