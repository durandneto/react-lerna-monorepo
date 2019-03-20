import React from 'react'

import {
  Container,
  NumberContainer,
  TimerContainer,
} from './index.styles'

const VHTime = props => (
  <Container>
    <NumberContainer>
      {
        props.number < 10 ? (
          `0${props.number}`
        ) : (
          props.number
        )
      }
    </NumberContainer>
    <TimerContainer>{props.text}</TimerContainer>
  </Container>
)

export default VHTime
