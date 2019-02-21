import React from 'react'
import { mount } from 'enzyme'

import VHCHeckbox from '.'

describe('VHCHeckbox Component', function() {

  it('renders without props', function() {
    const wrapper = mount((<VHCHeckbox text="specs" name="name" value="value" />))
    const VHCHeckboxSpec = wrapper.find('VHCHeckbox')
    expect(VHCHeckboxSpec.length).toBe(1)
  })

})
