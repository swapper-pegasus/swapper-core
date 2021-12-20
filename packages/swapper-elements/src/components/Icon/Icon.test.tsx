import React from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { Icon } from './Icon'

const icons = ['info', 'success', 'error', 'no-icon-defined']

describe('Icon', () => {
  icons.forEach((iconType) => {
    it(`${iconType}`, () => {
      const tree = renderer.create(<Icon type={iconType} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  icons.forEach((iconType) => {
    it(`Fill ${iconType}`, () => {
      const tree = renderer.create(<Icon fill type={iconType} />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
