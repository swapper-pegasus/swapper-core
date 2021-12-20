import React from 'react'
import {
  InformationCircleIcon as InformationCircleIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon as XCircleIconSolid
} from '@heroicons/react/solid'
import {
  InformationCircleIcon as InformationCircleOutline,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon as XCircleIconOutline
} from '@heroicons/react/outline'

type Props = {
  type: string,
  className?: string,
  fill?: boolean,
};

export function Icon ({
  type,
  fill,
  className
}: Props) {
  if (type === 'info') {
    return fill ? <InformationCircleIconSolid className={className}/> : <InformationCircleOutline className={className}/>
  }
  if (type === 'success') {
    return fill ? <CheckCircleIconSolid className={className}/> : <CheckCircleIconOutline className={className}/>
  }
  if (type === 'error') {
    return fill ? <XCircleIconSolid className={className}/> : <XCircleIconOutline className={className}/>
  }
  return <p>{type}</p>
}
