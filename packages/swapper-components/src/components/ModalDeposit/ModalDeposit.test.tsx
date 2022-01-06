import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { ModalDeposit } from './ModalDeposit'
import { Button } from '@swapper-org/swapper-elements'
import { render, fireEvent } from '@testing-library/react'

type Props = {
    address: string,
    tokenName: string,
    onClose: () => void
}

const ModalTestComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <>
            <div data-testid='modal-container' id='modalContainer'></div>
            <Button onClick={() => setIsOpen(true)} data-testid='button-open-modal'></Button>
            <ModalDeposit {...props} isOpen={isOpen} />
        </>
  )
}

const defaultProps = {
  address: '0xABC',
  tokenName: 'Bitcoin',
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
    fireEvent.click(component.getByRole('button'))
    expect(component.baseElement).toMatchSnapshot()
  })
  it('on close with keyboard', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    fireEvent.click(component.getByRole('button'))
    fireEvent.keyDown(component.getByRole('dialog'), { key: 'esc', keyCode: 27 })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
  it('on close with button', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    fireEvent.click(component.getByRole('button'))
    fireEvent.click(component.getByTestId('modal-accept-button'))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})