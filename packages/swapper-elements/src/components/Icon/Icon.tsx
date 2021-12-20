import React from 'react'
import {
  InformationCircleIcon as InformationCircleIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon as XCircleIconSolid,
  ArrowLeftIcon as ArrowLeftIconSolid
} from '@heroicons/react/solid'
import {
  InformationCircleIcon as InformationCircleOutline,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon as XCircleIconOutline,
  ArrowLeftIcon as ArrowLeftIconOutline
} from '@heroicons/react/outline'

const INFO = 'info'
const SUCCESS = 'success'
const ERROR = 'error'
const ARROW_LEFT = 'arrow-left'

export const types = [
  INFO,
  SUCCESS,
  ERROR,
  ARROW_LEFT
]

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
  if (type === INFO) {
    return fill ? <InformationCircleIconSolid className={className}/> : <InformationCircleOutline className={className}/>
  }
  if (type === SUCCESS) {
    return fill ? <CheckCircleIconSolid className={className}/> : <CheckCircleIconOutline className={className}/>
  }
  if (type === ERROR) {
    return fill ? <XCircleIconSolid className={className}/> : <XCircleIconOutline className={className}/>
  }
  if (type === ARROW_LEFT) {
    return fill ? <ArrowLeftIconSolid className={className}/> : <ArrowLeftIconOutline className={className}/>
  }
  return <p>{type}</p>
}
