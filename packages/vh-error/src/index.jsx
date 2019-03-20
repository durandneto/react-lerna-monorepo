import React from 'react'
import { Grid } from '@material-ui/core'
import VHText from 'vh-text'
import VHApplyButton from 'vh-apply-button'

const VHError = props => (
  <Grid container justify="center" spacing={16}>
    <Grid item sm={12}>
      <VHText align="center" color="primary" variant="h1" text={props.title}/>
    </Grid>
    <Grid item sm={12}>
      <VHText align="center" color="info" variant="h4" text={`(${props.statusCode}) ${props.subTitle} `}/>
    </Grid>
    <Grid item sm={12}>
      <VHText align="center" color="info" variant="caption" text={props.message}/>
    </Grid>
    <Grid container justify="center">
      <VHApplyButton
        applied={false}
        label={props.cta.label}
        _cta={props.cta.action}
        large
      />
    </Grid>
  </Grid>
)

export default VHError
