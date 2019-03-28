import React from 'react'
import {
  CheckCircle,
  Done,
  Check,
  ChevronRight,
  Mic,
  Videocam,
  VideocamOff,
  MicOff,
} from '@material-ui/icons'

let ComponentStyle = {}

const ComponentSuccess = {
  color: 'green'
}
const ComponentError = {
  color: 'red'
}

const VHImg = (props) => {
  if ( props.source ) {
    return (
      <img
        src={props.source}
        alt={props.alt}
        title={props.title}
        style={{width:"fit-content"}}
      />
    )
  } else {

    switch ( true ) {
      case props.success:
        ComponentStyle = ComponentSuccess
        break
      case props.error:
        ComponentStyle = ComponentError
        break
      default:
        ComponentStyle = {}
    }
    console.log('img ComponentStyle', ComponentStyle, props)

    switch (props.icon && props.icon.icon) {
      case 'check-circle':
          return <CheckCircle style={{color: ComponentStyle.color}} />
        break
      case 'done':
          return <Done style={{color: ComponentStyle.color}} />
        break
      case 'check':
          return <Check style={{color: ComponentStyle.color}} />
        break
      case 'mic':
          return <Mic style={{color: ComponentStyle.color}} />
        break
      case 'mic-off':
          return <MicOff style={{color: ComponentStyle.color}} />
        break
      case 'cam':
          return <Videocam style={{color: ComponentStyle.color}} />
        break
      case 'cam-off':
          return <VideocamOff style={{color: ComponentStyle.color}} />
        break
      case 'chevron-right':
          return <ChevronRight style={{color: ComponentStyle.color}} />
        break
    }
    return <Done />
  }
}

export default VHImg
