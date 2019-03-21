import React from 'react'
import { Grid } from '@material-ui/core'
import VHBreadcrumb from 'vh-breadcrumb'
import VHText from 'vh-text'


import {
  Container
} from './index.styles'

const VHTitleBreadcrumb = props => (
  <Grid container style={{position: 'relative'}}>
    <Container item xs={12}>
      <VHText text={props.title} variant="h5" />
    </Container>
    <Grid item xs={12}>
      <VHBreadcrumb title={props.title} onClick={props.onGoHome} />
    </Grid>
</Grid>
)

export default VHTitleBreadcrumb
