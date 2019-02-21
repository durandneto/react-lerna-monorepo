import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import VHCheckbox from 'vh-checkbox'

const VHSingleFilter = (props) => (
  <Fragment>
    <Typography variant="subtitle1" gutterBottom>
        {props.name}
    </Typography>
    {
      props.items && (
        props.items.map((item, itemIndex) => (
          <VHCheckbox
            rootIndex={props.rootIndex}
            itemIndex={itemIndex}
            key={`SingleRootFilter-${item.value}`}
            label={item.name}
            checked={item.checked}
            _onChange={props._onChange}
          />
          ))
      )
    }
  </Fragment>
)

export default VHSingleFilter
