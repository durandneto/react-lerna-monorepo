import React from 'react'
import { mount } from 'enzyme'

import VHTitleDescriptionImage from '.'

describe('VHTitleDescriptionImage Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTitleDescriptionImage>Vanhack</VHTitleDescriptionImage>))
    const VHTitleDescriptionImageSpec = wrapper.find('VHTitleDescriptionImage')
    expect(VHTitleDescriptionImageSpec.length).toBe(1)
  })
})
