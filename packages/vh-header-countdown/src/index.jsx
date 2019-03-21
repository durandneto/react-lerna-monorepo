import React from 'react'
import { Grid } from '@material-ui/core'
import VHTitleBreadcrumb from 'vh-title-breadcrumb'
import VHTimer from 'vh-timer'

const VHHeaderCountdown = props => (
  <Grid container alignItems="center">
    <Grid item xs={6}>
      <VHTitleBreadcrumb title={props.title} onGoHome={props.onGoHome} />
    </Grid>
    <Grid item xs={6} container justify="flex-end">
      <VHTimer
        endDate={props.endDate}
        onEndTime={props.onEndTime}
      />
    </Grid>
</Grid>
)

export default VHHeaderCountdown
