import React from 'react'
import { Grid } from "@material-ui/core"
import VHImg from 'vh-img'
import VHText from 'vh-text'
import VHLine from 'vh-line'

const VHImageHTML = props => (
  <React.Fragment>
    <Grid container>
    <Grid item xs={12} sm={2}>
      <VHImg source={props.source} />
    </Grid>
    <Grid item xs={12} sm={8} >
      <VHText variant="h6" text={props.title} />
      <div dangerouslySetInnerHTML={ {__html: props._html} } />
    </Grid>
  </Grid>
  {
    props.withLine && (
      <Grid container>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8} >
        <VHLine />
      </Grid>
    </Grid>
    )
  }
  </React.Fragment>
)

export default VHImageHTML
