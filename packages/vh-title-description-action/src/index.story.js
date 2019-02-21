import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHTitleDescriptionAction from '.'

storiesOf('Molecules/Title Description Action', module)

.add('default', () => (
  <VHTitleDescriptionAction
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    applied={false}
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))
.add('with line', () => (
  <VHTitleDescriptionAction
    withLine
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    applied={false}
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))

.add('default applied user', () => (
  <VHTitleDescriptionAction
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    applied={true}
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))
.add('with line applied user', () => (
  <VHTitleDescriptionAction
    withLine
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    applied={true}
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))
.add('with line and loading', () => (
  <VHTitleDescriptionAction
    withLine
    title="The Event"
    description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    loading
    cta={
      {
        label: "Apply to the Event",
        _callback:action()
      }
    }
  />
))

