import React from 'react'
import VHCard from 'vh-card'
import VHImg from 'vh-img'
import VHText from 'vh-text'
import VHIconTitledescription from 'vh-icon-title-description'

import {
  Container,
  SelectedContainer,
  SelectedIconContainer,
} from './index.styles'

const VHTaskCard = props => (
  <Container
    container
    alignItems="center"
    done={props.done}
    selected={props.selected}
    onClick={props.onClick}>
    <VHCard className="VHCard">
      <VHImg
        source="http://via.placeholder.com/72x72.png"
      />
      {
        props.done ? (
          <VHIconTitledescription
            title={props.title}
            highlight
            icon={{icon: 'check-circle'}}
          />
        ) : (
          <VHText text={props.title} variant="h6" />
        )
      }
      <VHIconTitledescription
        title="Content Medium:"
        description={props.type}
      />
      <VHIconTitledescription
        title="Deliverable:"
        description={props.deliverable}
      />
    </VHCard>
    {
      props.selected && (
        <SelectedContainer>
          <SelectedIconContainer>
            <VHImg
              icon={{icon: 'chevron-right'}}
            />
          </SelectedIconContainer>
        </SelectedContainer>
      )
    }
</Container>
)

export default VHTaskCard
