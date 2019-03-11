import React from 'react'
import { mount } from 'enzyme'

import VHEventHeader from '.'

describe('VHEventHeader Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHEventHeader>Vanhack</VHEventHeader>))
    const VHEventHeaderSpec = wrapper.find('VHEventHeader')
    expect(VHEventHeaderSpec.length).toBe(1)
  })
})
