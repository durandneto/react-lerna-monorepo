import React from 'react'
import { mount } from 'enzyme'

import VHGallery from '.'

describe('VHGallery Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHGallery>Vanhack</VHGallery>))
    const VHGallerySpec = wrapper.find('VHGallery')
    expect(VHGallerySpec.length).toBe(1)
  })
})
