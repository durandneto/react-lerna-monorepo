import React from 'react'
import {
  CheckCircle,
  Done
} from '@material-ui/icons'

const VHImg = (props) => {
  if ( props.source ) {
    return (
      <img
        src={props.source}
        alt={props.alt}
        title={props.title}
      />
    )
  } else {
    switch (props.icon) {
      case 'check-circle':
          return <CheckCircle />
        break
      case 'done':
          return <Done />
        break
    }
    return <Done />
  }
}

export default VHImg
