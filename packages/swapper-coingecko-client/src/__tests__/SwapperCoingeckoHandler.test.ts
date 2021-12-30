/* eslint-disable promise/param-names */
import SwapperCoingeckoHandler from '../SwapperCoingeckoHandler'
import {
  Response
} from '../http/HttpClientInterface'
const handler = new SwapperCoingeckoHandler()

describe('SwapperCoingeckoHandler', () => {
  it('success', async () => {
    const response: Response<string> = { data: 'Success', headers: {} }
    const param: Promise<Response<string>> = new Promise((resolve) => resolve(response))
    const result = await handler.handle(param)
    expect(result).toMatchSnapshot()
  })
  describe('error', () => {
    it('error coingecko', async () => {
      const error = {
        response: {
          data: { error: 'custom error' },
          status: 500,
          statusText: 'Internal server error',
          headers: { header: 'my-header' }
        }
      }
      const param: Promise<Response<string>> = new Promise((_, reject) => reject(error))
      try {
        await handler.handle(param)
      } catch (e) {
        expect(e).toMatchSnapshot()
      }
    })
    it('error without data', async () => {
      const error = {
        response: {
          status: 500,
          statusText: 'Internal server error',
          headers: { header: 'my-header' }
        }
      }
      const param: Promise<Response<string>> = new Promise((_, reject) => reject(error))
      try {
        await handler.handle(param)
      } catch (e) {
        expect(e).toMatchSnapshot()
      }
    })
    it('error without response', async () => {
      const error = {}
      const param: Promise<Response<string>> = new Promise((_, reject) => reject(error))
      try {
        await handler.handle(param)
      } catch (e) {
        expect(e).toMatchSnapshot()
      }
    })
  })
})
