import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHConfirmModal from '.'

storiesOf('Components/Modal/Confirm', module)
.add('VHConfirmModal Default', () => (
  <VHConfirmModal
    open={true}
    cta={{
      label:'Start Test',
      action: action()
    }}
    title="Start English Test"
    description="By starting your English test now you have 72 hours to complete all its five tasks. " />
))
.add('VHConfirmModal type error', () => (
  <VHConfirmModal
    open={true}
    error
    cta={{
      label:'Discard Video',
      action: action()
    }}
    title="Do you really want to discarrd this video?"
    description="This action can't be undone so make sure you want to discard this video, but you can record another one to send." />
))

