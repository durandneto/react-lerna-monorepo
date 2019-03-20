import React from 'react'
import { mount } from 'enzyme'

import VHTechTeam from '.'

describe('VHTechTeam Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTechTeam />))
    const VHTechTeamSpec = wrapper.find('VHTechTeam')
    expect(VHTechTeamSpec.length).toBe(1)
  })
})
