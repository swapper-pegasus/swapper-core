import React from 'react'
import { Modal, Button, Alert } from '@swapper-org/swapper-elements'

type Props = {
  address: string,
  tokenName: string,
  isOpen: boolean,
  onClose: () => void;
};

export function ModalDeposit ({ tokenName, address, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div data-testid='deposit-modal'>
        <div className="flex flex-col justify-center items-center">
          <Alert
            type='warning'
            description={`Sending any crypto asset besides ${tokenName} to this address may result in the total loss of your funds`}
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
