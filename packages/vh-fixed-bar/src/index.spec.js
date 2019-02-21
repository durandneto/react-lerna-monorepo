import React from 'react'
import { mount } from 'enzyme'

import VHFixedBar from '.'

describe('VHFixedBar Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHFixedBar>Vanhack</VHFixedBar>))
    const VHFixedBarSpec = wrapper.find('VHFixedBar')
    expect(VHFixedBarSpec.length).toBe(1)
  })
})
