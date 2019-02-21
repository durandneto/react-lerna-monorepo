import React from 'react'
import { mount } from 'enzyme'

import VHImageTitleDescription from '.'

describe('VHImageTitleDescription Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHImageTitleDescription>Vanhack</VHImageTitleDescription>))
    const VHImageTitleDescriptionSpec = wrapper.find('VHImageTitleDescription')
    expect(VHImageTitleDescriptionSpec.length).toBe(1)
  })
})
