import { useCallback } from 'react'

export function useFetchListCallback (): (listUrl: string) => Promise<TokenList> {
  // note: prevent dispatch if using for list search or unsupported list
  return useCallback(
    async (listUrl: string) => {
      console.log('listUrl', listUrl)
      return getTokenList(listUrl)
        .then((tokenList) => {
          console.log('tokenList', tokenList)
          return tokenList
        })
        .catch((error) => {
          console.log('error', error)
          console.debug(`Failed to get list at url ${listUrl}`, error)
          throw error
        })
    },
    []
  )
}
