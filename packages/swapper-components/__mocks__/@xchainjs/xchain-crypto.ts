/* eslint-disable promise/catch-or-return */
/* eslint-disable import/prefer-default-export */
const decryptFromKeystore = jest.fn().mockImplementation((_, pass) => {
  if (pass === '123') {
    return Promise.resolve('My secret phrase')
  }
  return Promise.reject(new Error('Incorrect pass'))
})
export { decryptFromKeystore }
