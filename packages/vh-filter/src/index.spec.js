import React from 'react'
import { mount } from 'enzyme'

import VHFilter from '.'

describe('VHFilter Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<VHFilter text="specs" />))
    const VHFilterSpec = wrapper.find('VHFilter')
    expect(VHFilterSpec.length).toBe(1)
  })

})
