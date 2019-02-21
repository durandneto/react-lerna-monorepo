import React from 'react'
import { mount } from 'enzyme'

import VHImgHtml from '.'

describe('VHImgHtml Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHImgHtml>Vanhack</VHImgHtml>))
    const VHImgHtmlSpec = wrapper.find('VHImgHtml')
    expect(VHImgHtmlSpec.length).toBe(1)
  })
})
