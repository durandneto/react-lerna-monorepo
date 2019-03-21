import React from 'react'
import VHCard from 'vh-card'
import VHImg from 'vh-img'
import VHText from 'vh-text'
import VHIconTitledescription from 'vh-icon-title-description'

import {
  Container
} from './index.styles'

const VHTaskCard = props => (
  <Container container alignItems="center" done={props.done}>
    <VHCard padding2>
      <VHImg
        source="http://via.placeholder.com/72x72.png"
      />
      {
        props.done ? (
          <VHIconTitledescription
            title="Task 01"
            highlight
            icon={{icon: 'check-circle'}}
          />
        ) : (
          <VHText text="Task 01" variant="h6" />
        )
      }
      <VHIconTitledescription
        title="Content Medium:"
        description="Text"
      />
      <VHIconTitledescription
        title="Deliverable:"
        description="90 sec video"
      />
    </VHCard>
</Container>
)

export default VHTaskCard
