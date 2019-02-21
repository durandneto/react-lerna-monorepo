import React from 'react'
import { Grid } from "@material-ui/core"
import VHTitleDescription  from 'vh-title-description-action'
import VHImg  from 'vh-img'

const VHImageTitleDescription = props => (
  <Grid container>
    <Grid item xs={12} sm={2}>
      <VHImg source={props.source} />
    </Grid>
    <Grid item xs={12} sm={8} >
      <VHTitleDescription
        title={props.title}
        description={props.description}
        cta={props.cta}
        withLine={props.withLine}
        applied={props.applied}
        loading={props.loading}
      />
    </Grid>
  </Grid>
)

export default VHImageTitleDescription
