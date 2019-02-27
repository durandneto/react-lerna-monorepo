import React from 'react'
import { mount } from 'enzyme'

import VHSnackBar from '.'

describe('VHSnackBar Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHSnackBar>Vanhack</VHSnackBar>))
    const VHSnackBarSpec = wrapper.find('VHSnackBar')
    expect(VHSnackBarSpec.length).toBe(1)
  })
})
