import React from 'react'
import VHImageTitleDescription from 'vh-image-title-description'
import VHCard from 'vh-card'

const VHCardImageTitleDescriptionAction = props => (
  <VHCard padding2>
    <VHImageTitleDescription
      source={props.data.source}
      title={props.data.title}
      description={props.data.description}
      cta={props.data.cta}
    />
  </VHCard>
)

export default VHCardImageTitleDescriptionAction
