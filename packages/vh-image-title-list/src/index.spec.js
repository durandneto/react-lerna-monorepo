import React from 'react'
import { mount } from 'enzyme'

import VHImageTitleList from '.'

describe('VHImageTitleList Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHImageTitleList>Vanhack</VHImageTitleList>))
    const VHImageTitleListSpec = wrapper.find('VHImageTitleList')
    expect(VHImageTitleListSpec.length).toBe(1)
  })
})
