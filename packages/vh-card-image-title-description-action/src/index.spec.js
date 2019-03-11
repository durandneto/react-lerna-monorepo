import React from 'react'
import { mount } from 'enzyme'

import VHCardImageTitleDescriptionAction from '.'

describe('VHCardImageTitleDescriptionAction Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHCardImageTitleDescriptionAction>Vanhack</VHCardImageTitleDescriptionAction>))
    const VHCardImageTitleDescriptionActionSpec = wrapper.find('VHCardImageTitleDescriptionAction')
    expect(VHCardImageTitleDescriptionActionSpec.length).toBe(1)
  })
})
