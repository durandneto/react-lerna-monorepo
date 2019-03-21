import React from 'react'
import VHText from 'vh-text'
import {
  Container,
  HomeContainer,
  TitleContainer,
} from './index.styles'

const VHBreadcrumb = props => (
  <Container>
    <HomeContainer onClick={props.onClick}>
      <VHText text="Home" variant="caption" color="primary" />
    </HomeContainer>
    <TitleContainer>
      <VHText text={props.title} variant="caption" />
    </TitleContainer>
  </Container>
)

export default VHBreadcrumb
