import React from 'react'
import { mount } from 'enzyme'

import VHPageEventsDetail from '.'

describe('VHPageEventsDetail Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHPageEventsDetail>Vanhack</VHPageEventsDetail>))
    const VHPageEventsDetailSpec = wrapper.find('VHPageEventsDetail')
    expect(VHPageEventsDetailSpec.length).toBe(1)
  })
})
