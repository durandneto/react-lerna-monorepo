import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHImageTitleDescription from '.'

storiesOf('Molecules/ImageTitleDescription', module)

.add('default', () => (
  <VHImageTitleDescription
    source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg"
    title="1. Apply to the event"
    description="The first step of the process is to apply to the event. This will inform VanHack of your intention of being considered for the Leap, and in return we will start monitoring your progress on the Profile, English and Code Verification processes."
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))

.add('with line', () => (
  <VHImageTitleDescription
    source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg"
    title="1. Apply to the event"
    withLine
    description="The first step of the process is to apply to the event. This will inform VanHack of your intention of being considered for the Leap, and in return we will start monitoring your progress on the Profile, English and Code Verification processes."
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))

.add('with line and applied user', () => (
  <VHImageTitleDescription
    source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg"
    title="1. Apply to the event"
    withLine
    applied={true}
    description="The first step of the process is to apply to the event. This will inform VanHack of your intention of being considered for the Leap, and in return we will start monitoring your progress on the Profile, English and Code Verification processes."
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))
.add('with line and loading', () => (
  <VHImageTitleDescription
    source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg"
    title="1. Apply to the event"
    withLine
    loading
    description="The first step of the process is to apply to the event. This will inform VanHack of your intention of being considered for the Leap, and in return we will start monitoring your progress on the Profile, English and Code Verification processes."
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))

