import React from 'react'
import { mount } from 'enzyme'

import VHModalVideoRecord from '.'

describe('VHModalVideoRecord Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHModalVideoRecord>Vanhack</VHModalVideoRecord>))
    const VHModalVideoRecordSpec = wrapper.find('VHModalVideoRecord')
    expect(VHModalVideoRecordSpec.length).toBe(1)
  })
})
