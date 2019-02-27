import React from 'react'

import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'

import { propEq, find, remove, findLast } from 'ramda'
import dateFns from 'date-fns'

import VHSnackBar from 'vh-snack-bar'

const VHEventStepDetail = props => {
  const event = props.event
  const keepHackingStep = event.steps ? find(propEq('shortName', 'Rejected'))(event.steps) : null
  const steps = event.steps ? remove(event.steps.length -1, 1, event.steps) : []
  const currentStep = event.steps ? findLast(propEq('passed', true))(steps) : null
  const activeIdex = event.steps ? currentStep.order : 0
  const currentStepMessage = keepHackingStep && keepHackingStep.current ? keepHackingStep : currentStep

  return (
      <Grid>
        <Grid container spacing={24}>
          {
            props.message && (
             <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
                <VHSnackBar
                  onClose={props.onCloseMessage}
                  type={props.message.type}
                  message={props.message.message}
                />
              </Grid>
            )
          }
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {
                `${event.city}, ${event.country}`
              }
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Date
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {dateFns.format(new Date(event.startDate), 'Do MMMM YYYY')}
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{overflow:"scroll"}}>
          {
            event.steps &&
            (
              <Stepper activeStep={activeIdex} alternativeLabel>
                {
                  steps.map(label => {
                    let isRejected = label.shortName === currentStep.shortName && keepHackingStep.current
                    return (
                      <Step key={`Stepper-label-item-${label.id}`} >
                        <StepLabel error={isRejected}>{label.name}</StepLabel>
                      </Step>
                    )
                  })
                }
              </Stepper>
            )
          }
        </Grid>
          {
            currentStepMessage
              && (
                <Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                      {
                        currentStepMessage.name
                      }
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {
                        currentStepMessage.description || 'Description is comming soon.'
                      }
                    </Typography>
                  </Grid>
                </Grid>
              )
          }
      </Grid>)
}

export default VHEventStepDetail
