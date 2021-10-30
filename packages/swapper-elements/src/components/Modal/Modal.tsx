import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from '../Button'

type Props = {
  title: string,
  description: string,
  isOpen: boolean,
  onClose: () => void;
};

export function Modal ({ title, description, isOpen, onClose }: Props) {
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
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all">
                <div className="bg-white px-4 pt-5 pb-4">
                  <div className="flex items-start">
                    <div className="mt-3 text-center">
                      <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        {title}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-center">
                  <Button onClick={() => onClose()}>
                    <span>Aceptar</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          modalContainer
    )
  )
}
