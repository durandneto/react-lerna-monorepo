import React from 'react'
import { mount } from 'enzyme'

import VHApplyButton from '.'

describe('VHApplyButton Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHApplyButton>Vanhack</VHApplyButton>))
    const VHApplyButtonSpec = wrapper.find('VHApplyButton')
    expect(VHApplyButtonSpec.length).toBe(1)
  })
})
