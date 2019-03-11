import React from 'react'
import { mount } from 'enzyme'

import VHCardImageTitleList from '.'

describe('VHCardImageTitleList Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHCardImageTitleList>Vanhack</VHCardImageTitleList>))
    const VHCardImageTitleListSpec = wrapper.find('VHCardImageTitleList')
    expect(VHCardImageTitleListSpec.length).toBe(1)
  })
})
