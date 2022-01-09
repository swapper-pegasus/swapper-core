import React, { useState, useEffect } from 'react'
import { Modal, Button, Input, Alert } from '@swapper-org/swapper-elements'
import { WalletBalance } from '@swapper-org/swapper-wallets'
import BN from 'bignumber.js'
export type Props = {
  address: string,
  tokenName: string,
  balance: WalletBalance
  isOpen: boolean,
  error?: string,
  isLoading?: boolean,
  onClose: () => void;
  onSend: (address: string, amount: string) => void;
};

export function ModalWithdrawal ({ tokenName, isLoading, error, address, balance, isOpen, onClose, onSend }: Props) {
  const [amount, setAmount] = useState<string>('')
  const [addressToSend, setAddressToSend] = useState<string>('')
  const [amountError, setAmountError] = useState('')

  useEffect(() => {
    new BN(amount).comparedTo(new BN(balance.confirmed)) === 1 ? setAmountError('Not enougth funds.') : setAmountError('')
  }, [amount, balance])

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div className='w-full' data-testid='withdrawal-modal'>
        {
          isLoading
            ? <p>Loading...</p>
            : <>
                <div className="flex flex-col justify-center items-center min-w-full">
                  <Alert
                    type='warning'
                    description={`Sending ${tokenName}.`}
                  />
                  {
                    error && <Alert
                      type='error'
                      description={error}
                    />
                  }
                  <div className="mt-2 min-w-full">
                    <p className='font-medium'>Your address: {address}</p>
                  </div>
                  <div className="mt-2 min-w-full">
                    <Input
                      placeholder="Send to this address"
                      label="Send to"
                      name="address"
                      value={addressToSend}
                      onChange={(value) => setAddressToSend(value)}
                    />
                  </div>
                  <div className="mt-2 min-w-full">
                    <Input
                      placeholder="Amount"
                      label="Amount"
                      name="amount"
                      value={amount}
                      type="number"
                      onChange={(value) => setAmount(value)}
                      error={amountError}
                    />
                  </div>
                </div>
                <div className="bg-white pt-3 py-3 text-right flex justify-between">
                  <div className='mr-4'>
                    <Button dataTestId='modal-cancel-button' onClick={() => onClose()}>
                      <span>Cancel</span>
                    </Button>
                  </div>
                  <Button dataTestId='modal-withdrawal-button' disabled={!!amountError} onClick={() => {
                    onSend(addressToSend, amount)
                  }}>
                    <span>Continue</span>
                  </Button>
                </div>
              </>
        }
      </div>
    </Modal>
  )
}
