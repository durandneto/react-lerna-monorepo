import React from 'react'
import { mount } from 'enzyme'

import VHProgress from '.'

describe('VHProgress Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHProgress>Vanhack</VHProgress>))
    const VHProgressSpec = wrapper.find('VHProgress')
    expect(VHProgressSpec.length).toBe(1)
  })
})
