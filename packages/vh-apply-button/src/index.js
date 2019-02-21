import React from 'react'
import Button from '@material-ui/core/Button'
import VHtext from 'vh-text'

import { VHButtonContainer, Container, VHCircularProgress } from './index.styles'

const VHButtonApply = (props) => {

  if ( props.applied ) {
    return (
      <VHtext variant="caption" text="You applied successfully." />
    )
  }
  const loadingInitialState = props.loading

  const [loading, setLoading] = React.useState(loadingInitialState)

  const handleButtonClick = _callback => {
    if (!loading) {
      setLoading(true)
      _callback()
    }
  }

  console.log("VHButtonApply",props,"loading",loading)

  return (
    <VHButtonContainer>
      <Container>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          fullWidth={props.fullWidth}
          onClick={() => {
            handleButtonClick(props._cta)
          }}
          size={props.large && "large"}
        >
        {
          props.label ? props.label : loading ? 'Applying' : 'Apply'
        }
        </Button>
        {loading && <VHCircularProgress size={24}/>}
      </Container>
    </VHButtonContainer>
  )
}

export default VHButtonApply