import React, { Fragment } from 'react'
import { reject } from 'ramda'
import Chip from '@material-ui/core/Chip'

const renderChip = (label, onDeleteItem) => (
  <Chip
    label={label}
    onDelete={onDeleteItem}
    color={'primary'}
    style={
      {
        backgroundColor: '#F59515',
        color: 'white',
        margin: '0 4px 4px 0',
      }
    }
  />

)

const VHDynamicChip = props => {
  return (
    <Fragment>
      {
        props.items &&
          props.items.map((chip, rootIndex) => {
            return chip.items.map((item, itemIndex) => {
              if (item.checked) {
                if (item.child) {
                  const children = item.child.items
                  const activeChildren = reject(child => !child.checked, item.child.items)
                  if (children.length === activeChildren.length) {
                    return renderChip(item.name, () => {
                      props._onRemove({data: {rootIndex, itemIndex}, eventType: 'unSelectAll'})
                    })
                  }
                  return children.map((child, childIndex ) => {
                    if (child.checked) {
                      return renderChip(child.name, () => {
                        props._onRemove({data: {rootIndex, itemIndex, childIndex}, eventType: 'unSelect'})
                      })
                    }
                  })
                }
                return renderChip(item.name, () => {
                  props._onRemove({data: {rootIndex, itemIndex}, eventType: 'unSelect'})
                })
              }
            })
          })
      }

    </Fragment>
  )
}

export default VHDynamicChip