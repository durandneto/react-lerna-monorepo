import React from 'react'
import { mount } from 'enzyme'

import VHModal from '.'

describe('VHModal Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHModal>Vanhack</VHModal>))
    const VHModalSpec = wrapper.find('VHModal')
    expect(VHModalSpec.length).toBe(1)
  })
})
