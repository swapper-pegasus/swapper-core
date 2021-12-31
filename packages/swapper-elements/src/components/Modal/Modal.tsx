import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../Button'

type Props = {
  children?: JSX.Element | string;
  isOpen: boolean,
  onClose: () => void;
};

export function Modal ({ children, isOpen, onClose }: Props) {
  const modalContainer = document.querySelector('#modalContainer')

  if (!isOpen || !modalContainer) {
    return null
  }

  return (
    ReactDOM.createPortal(
          <div className="fixed inset-0 overflow-y-auto w-2/6 m-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <span className="hidden" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all p-6">
                <div className="bg-white">
                  {children}
                </div>
                <div className="bg-white pt-3 py-3 text-right">
                  <Button dataTestId='modal-accept-button' onClick={() => onClose()}>
                    <span>Continuar</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          modalContainer
    )
  )
}
