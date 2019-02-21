import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHSimpleCard from '.'

storiesOf('Components/Cards/Simple Card', module)

  .add('Card Desktop', () => (
    <VHSimpleCard
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    />
  ))

  .add('Card Desktop Highlight', () => (
    <VHSimpleCard
      highlight
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
    />
  ))

  .add('Card Desktop with CTA', () => (
    <React.Fragment>
      <VHSimpleCard
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
        }
      }
    />
    <VHSimpleCard
      idle
      padding2
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
        }
      }
    />
    <VHSimpleCard
      error
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
        }
      }
    />
    </React.Fragment>
  ))

  .add('Card Column Desktop with CTA', () => (
    <VHSimpleCard
      column
      title="The Event"
      description="VanHack is running a LEAP event in Calgary in April 8th to 10th where companies will be able to meet and interview pre-selected high caliber tech talent. The event will give 15-20 of the world's most talented software developers the opportunity to meet face-to-face with potential employers. This is an amazing chance to do face-to-face interviews with top Canadian companies and land a job abroad. Don't miss it!"
      cta={
        {
          label: "Apply to the Event",
          _callback:action()
        }
      }
    />
  ))
