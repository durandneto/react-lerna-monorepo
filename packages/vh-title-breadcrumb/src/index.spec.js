import React from 'react'
import { mount } from 'enzyme'

import VHTitleBreadcrumb from '.'

describe('VHTitleBreadcrumb Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHTitleBreadcrumb />))
    const VHTitleBreadcrumbSpec = wrapper.find('VHTitleBreadcrumb')
    expect(VHTitleBreadcrumbSpec.length).toBe(1)
  })
})
