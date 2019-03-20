import React from 'react'
import { mount } from 'enzyme'

import VHTimer from '.'

describe('VHTimer Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTimer />))
    const VHTimerSpec = wrapper.find('VHTimer')
    expect(VHTimerSpec.length).toBe(1)
  })
})
