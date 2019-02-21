import React from 'react'
import Grid from '@material-ui/core/Grid'

import {
  CardContainer
} from "./index.styles"

const VHCard = (props) => (
  <CardContainer
    panel={props.panel}
    padding2={props.padding2}
    padding3={props.padding3}
    idle={props.idle}
    error={props.error}
  >
  {
    props.children
  }
  </CardContainer>
)

export default VHCard
