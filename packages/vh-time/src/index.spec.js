import React from 'react'
import { mount } from 'enzyme'

import VHTime from '.'

describe('VHTime Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTime />))
    const VHTimeSpec = wrapper.find('VHTime')
    expect(VHTimeSpec.length).toBe(1)
  })
})
