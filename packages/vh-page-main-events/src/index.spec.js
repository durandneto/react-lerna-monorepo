import React from 'react'
import { mount } from 'enzyme'

import VHPageMainEvents from '.'

describe('VHPageMainEvents Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHPageMainEvents>Vanhack</VHPageMainEvents>))
    const VHPageMainEventsSpec = wrapper.find('VHPageMainEvents')
    expect(VHPageMainEventsSpec.length).toBe(1)
  })
})
