import React from 'react'
import VHImg from 'vh-img'

const VHIconTitleDescription = props => {
  console.log('VHIconTitleDescription', props)

  return (
    <div style={{display:'flex', alignItems: 'center'}}>
      {
        props.icon && (
          <div style={{width: 'min-content', marginRight: '4px'}}>
            <VHImg icon={props.icon} success={props.success} error={props.error}/>
          </div>
        )
      }
      <div style={{	color: 'rgba(0,0,0,0.54)'}}>
        {
          props.title && (
            <span style={{ marginRight: '4px', color: 'rgba(0,0,0,0.87)'}}>
              {props.title}
            </span>
          )
        }
        {
          props.description && (
            <React.Fragment>
              {props.description}
            </React.Fragment>
          )
        }
      </div>
    </div>
  )
}

export default VHIconTitleDescription
