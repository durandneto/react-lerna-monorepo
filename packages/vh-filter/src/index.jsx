import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import VHChip from 'vh-chip'
import VHSingleFilter from 'vh-single-filter'

import {
  dissoc, set, lensPath, mergeRight, reject,
} from 'ramda'

const Filter = props => {
  const { name } = props.filter
  const { rootIndex } = props
  return (
    <Fragment>
    {
      props.items.map((item, itemIndex) => {
        debugger
        return (
            <VHSingleFilter
              name={name}
              items={item.child}
              _onChange={()=>{}}
            />
        )
      })
    }
    </Fragment>
  )
}

class DynamicFilters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: [],
    }
  }

  componentDidMount() {
    if (this.props.filters) {
      this.setState({ filters: this.props.filters })
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filters) {
      this.setState({ filters: nextProps.filters })
    }
  }

  handleRemoveFilter = event => {
    debugger
    switch (true) {
      case event.eventType === 'remove':
        this.handleRemoveSingleFilter(event.data.rootIndex, event.data.itemIndex, event.data.childIndex)
        break
      case event.eventType === 'removeAll':
        this.handleSelectAllFilter(event.data.rootIndex, event.data.itemIndex, event.data.isPartial)
        break
    }
  }

  handleRemoveSingleFilter = (rootIndex, itemIndex, childIndex) => {
    const { changeFilters } = this.props
    const { filters: oldFilters } = this.state
    let item
    let filters
    let childFilters
    if (oldFilters[rootIndex].items[itemIndex].child) {
      item = oldFilters[rootIndex].items[itemIndex].child.items[childIndex]
      childFilters = set(
        lensPath([rootIndex, 'items', itemIndex, 'child', 'items', childIndex]),
        item.checked
          ? dissoc('checked', item)
          : mergeRight(item, { checked: true }),
        oldFilters,
      )
      const children = reject(child => !child.checked,
        childFilters[rootIndex].items[itemIndex].child.items)
      filters = set(
        lensPath([rootIndex, 'items', itemIndex]),
        children.length === 0
          ? dissoc('checked', childFilters[rootIndex].items[itemIndex])
          : mergeRight(childFilters[rootIndex].items[itemIndex], { checked: true }),
        childFilters,
      )
    } else {
      item = oldFilters[rootIndex].items[itemIndex]
      filters = set(
        lensPath([rootIndex, 'items', itemIndex]),
        item.checked
          ? dissoc('checked', item)
          : mergeRight(item, { checked: true }),
        oldFilters,
      )
    }
    this.setState({ filters })
    changeFilters(filters)
  }

  handleSelectAllFilter = (rootIndex, itemIndex, isPartial) => {
    const { changeFilters } = this.props
    const { filters: oldFilters } = this.state
    let item
    let filters
    if (oldFilters[rootIndex].items[itemIndex].child) {
      item = oldFilters[rootIndex].items[itemIndex]
      filters = set(
        lensPath([rootIndex, 'items', itemIndex]),
        item.checked && !isPartial
          ? dissoc('checked', item)
          : mergeRight(item, { checked: true }),
        oldFilters,
      )

      filters[rootIndex].items[itemIndex].child.items.map((child, index) => {
        filters[rootIndex].items[itemIndex].child.items[index].checked = filters[rootIndex].items[itemIndex].checked
      })
      changeFilters(filters)
      this.setState({ filters })
    }
  }

  render() {
    const { filters } = this.state
    const { noLabel, _onChange } = this.props
    if (filters.length === 0) {
      return <span>loading filters...</span>
    }

    return (
      <Fragment>
        {
          !noLabel && (
            <Typography variant="h6" gutterBottom>
              Filters
            </Typography>
          )
        }
        {
          <VHChip
            _onRemove={_onChange}
            items={filters}
          />
        }
        {
          filters.map((filter, index) => {
            if (filter.items[index].child === undefined) {
              return (
                <VHSingleFilter
                rootIndex={index}
                name={filter.name}
                items={filter.items}
                _onChange={_onChange}
                />
              )
            }
          })
        }
      </Fragment>
    )
  }
}

export default DynamicFilters
