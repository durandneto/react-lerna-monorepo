import React from 'react'
import { mount } from 'enzyme'

import VHEventCard from '.'

describe('VHEventCard Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHEventCard>Vanhack</VHEventCard>))
    const VHEventCardSpec = wrapper.find('VHEventCard')
    expect(VHEventCardSpec.length).toBe(1)
  })
})
