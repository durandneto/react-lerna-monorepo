import React from 'react'

const VHImg = (props) => {
  if ( props.source ) {
    return (
      <img src={props.source} alt={props.alt} title={props.title}/>
    )
  } else {
    return (
      <p>icon</p>
    )
  }
}

export default VHImg
