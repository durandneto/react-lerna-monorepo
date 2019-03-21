import React from 'react'
import { mount } from 'enzyme'

import VHBreadcrumb from '.'

describe('VHBreadcrumb Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHBreadcrumb />))
    const VHBreadcrumbSpec = wrapper.find('VHBreadcrumb')
    expect(VHBreadcrumbSpec.length).toBe(1)
  })
})
