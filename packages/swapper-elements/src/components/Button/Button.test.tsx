import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('App', () => {
  it('should render', () => {
    const mockFn = jest.fn()
    expect(render(<Button onClick={mockFn} />)).toBeTruthy()
  })
})
