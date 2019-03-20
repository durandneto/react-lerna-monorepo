import React from 'react'
import VHText from 'vh-text'
import VHImg from 'vh-img'

const VHIconTitleDescription = props => (
  <div style={{display:'flex'}}>
    {
      props.icon && (
        <div style={{width: 'min-content', marginRight: '4px'}}>
          <VHImg {...props.icon} />
        </div>
      )
    }
    {
      props.description && (
        <div style={{	color: 'rgba(0,0,0,0.54)'}}>
          {
            props.description && (
              <span style={{ marginRight: '4px', color: 'rgba(0,0,0,0.87)'}}>
                {props.title}
              </span>
            )
          }
          {props.description}
        </div>
      )
    }
  </div>
)

export default VHIconTitleDescription
