import React from 'react'
import { Grid } from '@material-ui/core'
import VHStyledButton from './index.styles'

const VHTechTeam = props => (
  <Grid container alignItems="center">
    <Grid item xs={2}>
      Simple content
    </Grid>
    <Grid item xs={10}>
      <VHStyledButton variant="contained" color="primary" onClick={props.onClick}>
        Apply
      </VHStyledButton>
    </Grid>
</Grid>
)

export default VHTechTeam
