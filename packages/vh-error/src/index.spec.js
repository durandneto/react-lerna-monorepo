import React from 'react'
import { mount } from 'enzyme'

import VHError from '.'

describe('VHError Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHError>Vanhack</VHError>))
    const VHErrorSpec = wrapper.find('VHError')
    expect(VHErrorSpec.length).toBe(1)
  })
})
