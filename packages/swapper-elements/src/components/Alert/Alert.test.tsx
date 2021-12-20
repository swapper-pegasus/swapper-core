import React from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { Alert } from './Alert'

describe('Alert', () => {
  it('warning', () => {
    const tree = renderer.create(<Alert type='warning' title='My title' description='My description'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('success', () => {
    const tree = renderer.create(<Alert type='success' title='My title' description='My description'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('error', () => {
    const tree = renderer.create(<Alert type='error' title='My title' description='My description'/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
