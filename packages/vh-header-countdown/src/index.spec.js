import React from 'react'
import { mount } from 'enzyme'

import VHHeaderCountdown from '.'

describe('VHHeaderCountdown Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHHeaderCountdown />))
    const VHHeaderCountdownSpec = wrapper.find('VHHeaderCountdown')
    expect(VHHeaderCountdownSpec.length).toBe(1)
  })
})
