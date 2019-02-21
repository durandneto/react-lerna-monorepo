import React from 'react'
import { mount } from 'enzyme'

import VHText from '.'

describe('VHText Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<VHText text="specs" />))
    const VHTextSpec = wrapper.find('VHText')
    expect(VHTextSpec.length).toBe(1)
  })

})
