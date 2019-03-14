import React from 'react'
import { mount } from 'enzyme'

import VHVideoMaker from '.'

describe('VHVideoMaker Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHVideoMaker>Vanhack</VHVideoMaker>))
    const VHVideoMakerSpec = wrapper.find('VHVideoMaker')
    expect(VHVideoMakerSpec.length).toBe(1)
  })
})
