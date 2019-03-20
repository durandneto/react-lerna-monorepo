import React from 'react'
import VHCard from 'vh-card'
import VHImageTitleList from 'vh-image-title-list'

const VHCardImageTitleList = props => (
  <VHCard padding2>
    <VHImageTitleList data={props.data} />
  </VHCard>
)

export default VHCardImageTitleList
