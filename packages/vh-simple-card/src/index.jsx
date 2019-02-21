import React from 'react'
import VHCard from 'vh-card'
import VHTitleDescription from 'vh-title-description'

const VHSimpleCard = (props) => (
  <VHCard
    idle={props.idle}
    padding2={props.padding2}
    error={props.error}
  >
    <VHTitleDescription
      direction={props.column && "column"}
      title={props.title}
      description={props.description}
      cta={props.cta}
      type={props.highlight && "Highlight"}
    />
  </VHCard>
)

export default VHSimpleCard
