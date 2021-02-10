import React from 'react'
import { render } from '@testing-library/react'

import Components from './components'

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components title={'Name'} />)
    expect(baseElement).toBeTruthy()
  })
})
