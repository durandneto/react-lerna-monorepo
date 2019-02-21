import React, { Component } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import CheckPartialImg from '../src/assets/images/check-partial.svg'

import { Container } from './index.styles'


export default class VHCheckbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      partial: true,
      stopPropagation: false,
    }
  }

  componentWillMount = () => {
    const { checked, partial } = this.props
    this.setState({
      checked: checked || false,
      partial: partial || false,
    })
  }

  handleChange = () => {
    const { _onChange, rootIndex, itemIndex, childIndex } = this.props
    const { stopPropagation } = this.state

    if ( !stopPropagation ) {
      this.setState({
        checked: !this.state.checked
      }, () => {
        _onChange({
          data: {
            itemIndex: itemIndex,
            childIndex: childIndex,
            rootIndex: rootIndex,
          },
          eventType: this.state.checked ? 'select' : 'unSelect',
        })
      })
    } else {
      this.setState({
        stopPropagation: false
      })
    }
  }

  handleSelectAll = (e) => {
    const { _onChange, rootIndex, itemIndex } = this.props
    this.setState({
      checked: true,
      partial: false,
      stopPropagation: true,
    }, () => {
      debugger
      _onChange({
        data: {
          itemIndex: itemIndex,
          rootIndex: rootIndex,
        },
        eventType: "selectAll",
      })
    })

  }

  render () {
    const {
      label,
      value,
      noLabel,
    } = this.props
    const {
      partial,
      checked,
    } = this.state
    return (
      <Container>
        <FormControlLabel
          control={
            (
              partial
                ? <img src={CheckPartialImg} style={{width:'18px', heigth: '18px', margin: '3px 16px 3px 14px'}} onClick={this.handleSelectAll} />
                : (
                  <Checkbox
                    checked={checked}
                    name={label}
                    value={`${value}`}
                    onChange={this.handleChange}
                    color="primary"
                    style={{ height: 0 }}
                  />
                )
            )}
          label={noLabel ? '' : label}
        />
      </Container>
    )
 }
}