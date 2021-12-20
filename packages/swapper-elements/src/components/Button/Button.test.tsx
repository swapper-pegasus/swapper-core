import React from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import { Button } from './Button'

describe('Button', () => {
  it('Render default', () => {
    const mockFn = jest.fn()
    const tree = renderer.create(<Button onClick={mockFn}><p>children</p></Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Render link', () => {
    const mockFn = jest.fn()
    const tree = renderer.create(<Button type='link' onClick={mockFn}><p>children</p></Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Render withGradient', () => {
    const mockFn = jest.fn()
    const tree = renderer.create(<Button withGradient onClick={mockFn}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('Render disabled', () => {
    const mockFn = jest.fn()
    const tree = renderer.create(<Button disabled onClick={mockFn}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
