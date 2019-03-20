import React from 'react'
import VHText from 'vh-text'
import VHApplyButton from 'vh-apply-button'

import { VHContainer } from './index.styles'

const VHTitleApplyButton = props => (
  <VHContainer>
    <VHText
      color="primary"
      text={props.title}
      variant="subtitle1"
    />
    <VHApplyButton
      applied={props.applied}
      loading={props.loading}
      _cta={props._cta}
      large
      />
  </VHContainer>
)

export default VHTitleApplyButton
