import React from 'react'
import { Grid, Button } from "@material-ui/core"
import VHText from 'vh-text'
import VHApplyButton from 'vh-apply-button'

const VHHighlightTitleCta = props => (
  <Grid container direction='column' alignItems="center">
    <Grid item xs={12}>
      <VHText
        color={props.color}
        text={props.title}
        variant={props.template2 ? "h4" : "h2"}
        />
    </Grid>
    <Grid item xs={12}>
      <VHText
        color={props.color}
        variant={props.template2 ? "subtitle1" : "h4"}
        text={props.subTitle}
      />
    </Grid>
    {
      props.cta && (
        <Grid item xs={12}>
          <VHApplyButton
            applied={props.applied || false}
            loading={props.loading}
            _cta={props.cta._callback}
            label={props.cta.label}
            large={props.template2 && "large" }
          />
        </Grid>
      )
    }
  </Grid>
)

export default VHHighlightTitleCta
