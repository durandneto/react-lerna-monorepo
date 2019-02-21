import React from 'react'
import { mount } from 'enzyme'

import VHLine from '.'

describe('VHLine Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHLine>Vanhack</VHLine>))
    const VHLineSpec = wrapper.find('VHLine')
    expect(VHLineSpec.length).toBe(1)
  })
})
