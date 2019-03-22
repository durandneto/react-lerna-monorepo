import React from 'react'
import { Grid } from '@material-ui/core'
import VHStyledButton from './index.styles'

const VHMediaSource = props => (
  <video
    controls={props.controls}
    width={props.width}
    height={props.height}
  >
    <source src={props.source} type={props.type} />
  </video>
)

export default VHMediaSource
