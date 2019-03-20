import React from 'react'
import { mount } from 'enzyme'

import VHIconTitleDescription from '.'

describe('VHIconTitleDescription Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHIconTitleDescription />))
    const VHIconTitleDescriptionSpec = wrapper.find('VHIconTitleDescription')
    expect(VHIconTitleDescriptionSpec.length).toBe(1)
  })
})
