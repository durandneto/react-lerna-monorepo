import React from 'react'
import { mount } from 'enzyme'

import VHHighlightTitleCta from '.'

describe('VHHighlightTitleCta Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHHighlightTitleCta>Vanhack</VHHighlightTitleCta>))
    const VHHighlightTitleCtaSpec = wrapper.find('VHHighlightTitleCta')
    expect(VHHighlightTitleCtaSpec.length).toBe(1)
  })
})
