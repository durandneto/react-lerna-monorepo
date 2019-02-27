import React from 'react'
import { mount } from 'enzyme'

import VHTermOfUse from '.'

describe('VHTermOfUse Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTermOfUse>Vanhack</VHTermOfUse>))
    const VHTermOfUseSpec = wrapper.find('VHTermOfUse')
    expect(VHTermOfUseSpec.length).toBe(1)
  })
})
