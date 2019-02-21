import React from 'react'
import VHTextContainer from './index.styles'

const VHText = (props) => {
  let styles = {}

  if ( props.color ) {
    switch (true) {
      case props.color === "white":
        styles.color = "#fff"
        break
      case props.color === "primary":
        styles.color = "#0675CE"
        break
    }
  }
    switch (props.variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'subtitle1':
      case 'subtitle2':
      case 'body1':
      case 'body2':
      case 'button':
      case 'caption':
      case 'overline':
        return <VHTextContainer noWrap={props.noWrap} style={styles} align={props.align} variant={props.variant} gutterBottom>{props.text}</VHTextContainer>
    default:
      return <VHTextContainer variant="body1" gutterBottom>{props.text}</VHTextContainer>
    }
}

export default VHText
