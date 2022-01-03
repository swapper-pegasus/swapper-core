// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('../../jest.config')

module.exports = {
  ...config,
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json']
}
