import SwapperCoingeckoConfigBuilder, { THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE } from '../SwapperCoingeckoConfigBuilder'

const builder = new SwapperCoingeckoConfigBuilder({ baseUrl: 'https://mi-test-url.com/' })

function generateLongString (length: number): string {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += 'a'
  }
  return result
}

describe('SwapperCoingeckoConfigBuilder', () => {
  describe('get', () => {
    it('success', async () => {
      const result = await builder.build(
        'get',
        'get-path',
        { name: 'name', surname: 'surname' }
      )
      expect(result).toMatchSnapshot()
    })
    it('url too long', async () => {
      const result = await builder.build(
        'get',
        generateLongString(THRESHOLD_AVOID_REQUEST_URL_TOO_LARGE),
        { name: 'name', surname: 'surname' }
      )
      expect(result).toMatchSnapshot()
    })
  })
  it('post', async () => {
    const result = await builder.build(
      'post',
      'post-path',
      { name: 'name', surname: 'surname' }
    )
    expect(result).toMatchSnapshot()
  })
  it('put', async () => {
    const result = await builder.build(
      'put',
      'put-path',
      { name: 'name', surname: 'surname' }
    )
    expect(result).toMatchSnapshot()
  })
  it('delete', async () => {
    const result = await builder.build(
      'delete',
      'delete-path',
      { name: 'name', surname: 'surname' }
    )
    expect(result).toMatchSnapshot()
  })
})
