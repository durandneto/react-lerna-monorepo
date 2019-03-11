import React from 'react'
import { mount } from 'enzyme'

import VHPageEnglishVerification from '.'

describe('VHPageEnglishVerification Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHPageEnglishVerification>Vanhack</VHPageEnglishVerification>))
    const VHPageEnglishVerificationSpec = wrapper.find('VHPageEnglishVerification')
    expect(VHPageEnglishVerificationSpec.length).toBe(1)
  })
})
