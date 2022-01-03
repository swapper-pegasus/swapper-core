import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { Modal } from './Modal'
import { Button } from '../Button'
import { render, fireEvent } from '@testing-library/react'

type Props = {
    onClose: () => void
}

const ModalTestComponent = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <>
            <div data-testid='modal-container' id='modalContainer'></div>
            <Button onClick={() => setIsOpen(true)} data-testid='button-open-modal'></Button>
            <Modal {...props} isOpen={isOpen} />
        </>
  )
}

const defaultProps = {
  children: <div data-testid='content-modal'>Content modal</div>,
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

describe('Modal', () => {
  it('Render open', () => {
    const component = setUpRender({})
    component.getByRole('button')
    fireEvent.click(component.getByRole('button'))
    expect(component.queryByTestId('content-modal')).toBeDefined()
  })
  it('Render close', () => {
    const component = setUpRender({})
    expect(component.queryByTestId('content-modal')).toBeNull()
  })
  it('press esc', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    component.getByRole('button')
    fireEvent.click(component.getByRole('button'))
    fireEvent.keyDown(component.getByRole('dialog'), { key: 'esc', keyCode: 27 })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
