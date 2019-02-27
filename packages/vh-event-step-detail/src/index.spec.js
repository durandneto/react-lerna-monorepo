import React from 'react'
import { mount } from 'enzyme'

import VHEventStepDetail from '.'

describe('VHEventStepDetail Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHEventStepDetail>Vanhack</VHEventStepDetail>))
    const VHEventStepDetailSpec = wrapper.find('VHEventStepDetail')
    expect(VHEventStepDetailSpec.length).toBe(1)
  })
})
