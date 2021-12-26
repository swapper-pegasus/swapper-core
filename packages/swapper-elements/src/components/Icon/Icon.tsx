import React from 'react'
import {
  InformationCircleIcon as InformationCircleIconSolid,
  CheckCircleIcon as CheckCircleIconSolid,
  XCircleIcon as XCircleIconSolid,
  ArrowLeftIcon as ArrowLeftIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  CogIcon as CogIconSolid,
  DatabaseIcon as DatabaseIconSolid,
  InboxIcon as InboxIconSolid,
  RefreshIcon as RefreshIconSolid,
  LogoutIcon as LogoutIconSolid
} from '@heroicons/react/solid'
import {
  InformationCircleIcon as InformationCircleOutline,
  CheckCircleIcon as CheckCircleIconOutline,
  XCircleIcon as XCircleIconOutline,
  ArrowLeftIcon as ArrowLeftIconOutline,
  ChartBarIcon as ChartBarOutline,
  CogIcon as CogIconOutline,
  DatabaseIcon as DatabaseIconOutline,
  InboxIcon as InboxIconOuline,
  RefreshIcon as RefreshIconOutline,
  LogoutIcon as LogoutIconOutline
} from '@heroicons/react/outline'

const INFO = 'info'
const SUCCESS = 'success'
const ERROR = 'error'
const ARROW_LEFT = 'arrow-left'
const CHART_BAR = 'chart-bar'
const SETTINGS = 'settings'
const STAKING = 'staking'
const PORTFOLIO = 'portfolio'
const SWAP = 'swap'
const LOGOUT = 'logout'

export const types = [
  INFO,
  SUCCESS,
  ERROR,
  ARROW_LEFT,
  CHART_BAR,
  SETTINGS,
  STAKING,
  PORTFOLIO,
  SWAP,
  LOGOUT
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
  if (type === CHART_BAR) {
    return fill ? <ChartBarIconSolid className={className}/> : <ChartBarOutline className={className}/>
  }
  if (type === SETTINGS) {
    return fill ? <CogIconSolid className={className} /> : <CogIconOutline className={className} />
  }
  if (type === STAKING) {
    return fill ? <DatabaseIconSolid className={className} /> : <DatabaseIconOutline className={className} />
  }
  if (type === PORTFOLIO) {
    return fill ? <InboxIconSolid className={className} /> : <InboxIconOuline className={className} />
  }
  if (type === SWAP) {
    return fill ? <RefreshIconSolid className={className} /> : <RefreshIconOutline className={className} />
  }
  if (type === LOGOUT) {
    return fill ? <LogoutIconSolid className={className} /> : <LogoutIconOutline className={className} />
  }
  return <p>{type}</p>
}
