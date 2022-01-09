import React from 'react'
import { Modal, Button, Alert } from '@swapper-org/swapper-elements'
import { Token } from '@swapper-org/swapper-coingecko-client'

type Props = {
  address?: string,
  token?: Token,
  isOpen: boolean,
  onClose: () => void;
};

const DEFAULT_TOKEN = {
  id: '',
  name: '',
  symbol: ''
}

export function ModalDeposit ({ token = DEFAULT_TOKEN, address, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div data-testid='deposit-modal'>
        <div className="flex flex-col justify-center items-center">
          <Alert
            type='warning'
            description={`Sending any crypto asset besides ${token.name} to this address may result in the total loss of your funds`}
          />
          <div className="mt-3">
            <p className='font-medium'>{address}</p>
          </div>
        </div>
        <div className="bg-white pt-3 py-3 text-right">
          <Button dataTestId='modal-accept-button' onClick={() => onClose()}>
            <span>Continue</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}

ModalDeposit.defaultProps = {
  token: DEFAULT_TOKEN
}
