import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { ModalWithdrawal, Props } from './ModalWithdrawal'
import { Button } from '@swapper-org/swapper-elements'
import { render, fireEvent } from '@testing-library/react'

const TestComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <>
            <div id='modalContainer'></div>
            <Button dataTestId='button-open-modal' onClick={() => setIsOpen(true)}></Button>
            <ModalWithdrawal {...props} isOpen={isOpen} />
        </>
  )
}

const defaultProps = {
  address: '0xABC',
  tokenName: 'Ethereum',
  balance: { confirmed: '12.23123', unconfirmed: '0' },
  isOpen: true,
  onClose: jest.fn(),
  onSend: jest.fn()
}

function setUpRender (props: object) {
  const finalProps = {
    ...defaultProps,
    ...props
  }
  return render(
    <TestComponent {...finalProps}/>
  )
}

describe('ModalWithdrawal', () => {
  it('Send on continue', () => {
    const mockOnSend = jest.fn()
    const component = setUpRender({ onSend: mockOnSend })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.change(component.getByTestId('address-input'), { target: { value: '0xAAAA' } })
    fireEvent.change(component.getByTestId('amount-input'), { target: { value: '1.2' } })
    fireEvent.click(component.getByTestId('modal-withdrawal-button'))
    expect(mockOnSend).toHaveBeenCalledWith('0xAAAA', '1.2')
  })
  it('Close on cancel', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.change(component.getByTestId('address-input'), { target: { value: '0xAAAA' } })
    fireEvent.change(component.getByTestId('amount-input'), { target: { value: '1.2' } })
    fireEvent.click(component.getByTestId('modal-cancel-button'))
    expect(mockOnClose).toHaveBeenCalledWith()
  })
  it('Not enougth funds', () => {
    const component = setUpRender({})
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.change(component.getByTestId('address-input'), { target: { value: '0xAAAA' } })
    fireEvent.change(component.getByTestId('amount-input'), { target: { value: '123' } })
    expect(component.getByTestId('error-amount-input')).toHaveTextContent('Not enougth funds.')
  })
  it('Close press ESC', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.keyDown(component.getByRole('dialog'), { key: 'esc', keyCode: 27 })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
