import React from 'react'
import { mount } from 'enzyme'

import VHTaskCard from '.'

describe('VHTaskCard Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTaskCard />))
    const VHTaskCardSpec = wrapper.find('VHTaskCard')
    expect(VHTaskCardSpec.length).toBe(1)
  })
})
