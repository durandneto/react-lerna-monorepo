import React from 'react'

import { FixedBar } from './index.styles'

const VHFixedBar = props => (
  <FixedBar
    show={props.show}
    template2={props.template2}
    template3={props.template3}
    template4={props.template4}
  >
    {
      props.children
    }
  </FixedBar>
)

export default VHFixedBar
