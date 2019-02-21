import React from 'react'
import { mount } from 'enzyme'

import VHTitleApplyButton from '.'

describe('VHTitleApplyButton Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTitleApplyButton>Vanhack</VHTitleApplyButton>))
    const VHTitleApplyButtonSpec = wrapper.find('VHTitleApplyButton')
    expect(VHTitleApplyButtonSpec.length).toBe(1)
  })
})
