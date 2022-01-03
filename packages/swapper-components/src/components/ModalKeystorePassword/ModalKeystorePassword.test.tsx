import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { ModalKeystorePassword } from './ModalKeystorePassword'
import { Button } from '@swapper-org/swapper-elements'
import { render, fireEvent } from '@testing-library/react'
import { Keystore } from '@xchainjs/xchain-crypto'
import { act } from 'react-dom/test-utils'

type Props = {
  onGetSecretPhrase: (phrase: string) => void,
  keystore: Keystore,
  onClose: () => void,
}

const ModalTestComponent = (props: Props) => {
  const [getSecretPhrase, setGetSecretPhrase] = useState(false)
  return (
        <>
            <div id='modalContainer'></div>
            <Button dataTestId='button-open-modal' onClick={() => setGetSecretPhrase(true)}></Button>
            <ModalKeystorePassword {...props} getSecretPhrase={getSecretPhrase} />
        </>
  )
}

const defaultProps = {
  onGetSecretPhrase: jest.fn(),
  keystore: {} as Keystore,
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

function defer (): Promise<void> {
  return new Promise((resolve) => resolve())
}

describe('ModalKeystorePassword', () => {
  it('Correct password', async () => {
    const mockOnGetSecretPhrase = jest.fn()
    const component = setUpRender({ onGetSecretPhrase: mockOnGetSecretPhrase })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.change(component.getByTestId('password-input'), { target: { value: '123' } })
    await act(async () => {
      fireEvent.click(component.getByTestId('password-continue-button'))
      await defer()
    })
    expect(mockOnGetSecretPhrase).toHaveBeenCalledWith('My secret phrase')
  })
  it('Incorrect  password', async () => {
    const mockOnGetSecretPhrase = jest.fn()
    const component = setUpRender({ onGetSecretPhrase: mockOnGetSecretPhrase })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.change(component.getByTestId('password-input'), { target: { value: '1234' } })
    await act(async () => {
      fireEvent.click(component.getByTestId('password-continue-button'))
      await defer()
    })
    expect(component.getByTestId('error-password-input')).toHaveTextContent(
      'Incorrect password'
    )
  })
  it('on close', () => {
    const mockOnClose = jest.fn()
    const component = setUpRender({ onClose: mockOnClose })
    fireEvent.click(component.getByTestId('button-open-modal'))
    fireEvent.keyDown(component.getByRole('dialog'), { key: 'esc', keyCode: 27 })
    expect(mockOnClose).toHaveBeenCalledTimes(1)
  })
})
