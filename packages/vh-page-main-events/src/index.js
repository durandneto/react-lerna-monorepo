import React from 'react'
import VHEventCard from 'vh-event-card'
import VHEventHeader from 'vh-event-header'
import VHText from 'vh-text'

import {
  PageContainer,
  TitleContainer,
  CardsContainer,
} from './index.styles'

const VHPageMainEvents = props => (
  <PageContainer>
    <VHEventHeader data={props.mainEvent} />
    <TitleContainer>
      <VHText variant="h5" text="Next Events" />
    </TitleContainer>
    <CardsContainer>
      {
        props.nextEvents.map( event => (
          <VHEventCard
            onApply={() =>{}}
            onDetail={() =>{}}
            data={event}
          />
        ))
      }
    </CardsContainer>
  </PageContainer>
)

export default VHPageMainEvents
