import React from 'react'
import { mount } from 'enzyme'

import VHPageEnglishEvaluation from '.'

describe('VHPageEnglishEvaluation Component', function() {
  it('renders without props', function() {
    const wrapper = mount((<VHPageEnglishEvaluation />))
    const VHPageEnglishEvaluationSpec = wrapper.find('VHPageEnglishEvaluation')
    expect(VHPageEnglishEvaluationSpec.length).toBe(1)
  })
})
