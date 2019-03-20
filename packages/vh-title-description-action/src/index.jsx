import React from 'react'
import VHTitleDescription from 'vh-title-description'

const VHTitleDescriptionAction = props => (
  <VHTitleDescription
    title={props.title}
    direction="column"
    description={props.description}
    type="Highlight"
    cta={props.cta}
    alignStart
    withLine={props.withLine}
    applied={props.applied}
    loading={props.loading}
  />
)

export default VHTitleDescriptionAction
