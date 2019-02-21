import React from 'react'
import { mount } from 'enzyme'

import VH from '.'

describe('VH Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<VH text="specs" />))
    const VHSpec = wrapper.find('VH')
    expect(VHSpec.length).toBe(1)
  })

})
