import React from 'react'
import { Modal } from '@swapper-org/swapper-elements'

type Props = {
  title?: string,
  description: JSX.Element | string,
  icon?: JSX.Element | string,
  isOpen: boolean,
  onClose: () => void;
};

export function ModalInfo ({ title, icon, description, isOpen, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={() => onClose()}>
      <div className="flex items-start">
      <div className="mt-3">
        {
          title && <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
          {title}
        </h3>
        }
        <div className="flex mt-2">
          {
            icon &&
            <div className='px-2'>
              { icon }
            </div>
          }
          <div className="text-sm text-swpGray">
            {description}
          </div>
        </div>
      </div>
      </div>
    </Modal>
  )
}
