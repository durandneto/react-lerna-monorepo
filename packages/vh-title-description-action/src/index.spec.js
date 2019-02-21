import React from 'react'
import { mount } from 'enzyme'

import VHTitleDescriptionAction from '.'

describe('VHTitleDescriptionAction Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTitleDescriptionAction>Vanhack</VHTitleDescriptionAction>))
    const VHTitleDescriptionActionSpec = wrapper.find('VHTitleDescriptionAction')
    expect(VHTitleDescriptionActionSpec.length).toBe(1)
  })
})
