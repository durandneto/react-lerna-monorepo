import React from 'react'
import Button from '@material-ui/core/Button'
import VHtext from 'vh-text'
// import PropTypes from 'prop-types'

import { VHButtonContainer, Container, VHCircularProgress } from './index.styles'

const VHButtonApply = props => {
  if (props.applied ) {
    return (
      <VHtext variant="caption" text="You applied successfully." />
    )
  }

  return (
    <VHButtonContainer>
      <Container>
        <Button
          variant={props.outline ? "outlined" : "contained" }
          color="primary"
          disabled={props.isDisabled || props.loading}
          fullWidth={props.fullWidth}
          onClick={props._cta}
          size={props.large && "large"}
        >
          {
            props.label ? props.label : props.loading ? 'Applying' : 'Apply'
          }
        </Button>
        {props.loading && <VHCircularProgress size={24} />}
      </Container>
    </VHButtonContainer>
  )
}

// VHButtonApply.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.string,
//   ),
// }

export default VHButtonApply