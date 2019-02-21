import React from 'react'
import { mount } from 'enzyme'

import VHVerticalTabs from '.'

describe('VHVerticalTabs Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHVerticalTabs>Vanhack</VHVerticalTabs>))
    const VHVerticalTabsSpec = wrapper.find('VHVerticalTabs')
    expect(VHVerticalTabsSpec.length).toBe(1)
  })
})
