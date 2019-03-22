import React from 'react'
import { mount } from 'enzyme'

import VHMediaSource from '.'

describe('VHMediaSource Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHMediaSource />))
    const VHMediaSourceSpec = wrapper.find('VHMediaSource')
    expect(VHMediaSourceSpec.length).toBe(1)
  })
})
