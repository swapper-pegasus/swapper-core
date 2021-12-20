import React from 'react'
import { Icon } from '../Icon'

type AlertType = 'warning' | 'error' | 'success';

type Props = {
  title?: string,
  description: string,
  type: AlertType,
};

const iconsMapp = {
  warning: 'info',
  error: 'error',
  success: 'success'
}

export function Alert ({
  title,
  description,
  type
}: Props) {
  return (
    <div className={`flex items-center bg-${type} border-l-4 border-${type}-darkest text-${type}-dark py-2`}>
      <div className="px-2">
        <Icon type={iconsMapp[type]} className='w-6 h-6'/>
      </div>
      <div>
        <p className='font-semibold'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}
