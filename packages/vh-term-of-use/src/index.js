import React, { Component, Fragment } from 'react'
// import PropTypes from 'prop-types'
import {
  Typography,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from '@material-ui/core'

class VHTermOfUse extends Component {
  state = {
    open: false,
    experience: false,
    able: false,
    relocate: false,
    error: false,
  }

  handleValidate = () => {
    this.props.onValidate(!this.state.error)
  }

  handleChange = name => event => {
    const checked =  event.target.checked
    let { experience, able, relocate } = this.state

    switch (name) {
      case 'experience':
        this.setState({ experience: checked }, () => {
          experience = checked
          const errorHandle = [experience, able, relocate].filter(v => v).length !== 3
          this.setState({ error: errorHandle }, () => {
            this.handleValidate()
          })
        })
        break
      case 'able':
        this.setState({ able: checked }, () => {
          able = checked
          const errorHandle = [experience, able, relocate].filter(v => v).length !== 3
          this.setState({ error: errorHandle }, () => {
            this.handleValidate()
          })
        })
        break
      case 'relocate':
        this.setState({ relocate: checked }, () => {
          relocate = checked
          const errorHandle = [experience, able, relocate].filter(v => v).length !== 3
          this.setState({ error: errorHandle }, () => {
            this.handleValidate()
          })
        })
        break
      default:
    }
  }

  render() {
    const { experience, able, relocate, error } = this.state
    return (
      <Fragment>
        <Typography variant="h5" align="center" gutterBottom>
          Please make sure you've read all the instructions before you apply.
        </Typography>
        <FormControl required error={error} component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={experience} onChange={this.handleChange('experience')} value="experience" />
              }
              label="* I have three or more years of professional experience."
            />
            <FormControlLabel
              control={
                <Checkbox checked={able} onChange={this.handleChange('able')} value="able" />
              }
              label="* I am able to be in person at the São Paulo Recruiting Mission, in Brazil, on March 23rd and 24th."
            />
            <FormControlLabel
              control={
                <Checkbox checked={relocate} onChange={this.handleChange('relocate')} value="relocate" />
              }
              label="* I am able to relocate in the first semester of 2019."
            />
          </FormGroup>
          {
            error && (
            <FormHelperText>You need to check all steps</FormHelperText>
            )
          }
        </FormControl>
      </Fragment>
    )
  }
}

export default VHTermOfUse
