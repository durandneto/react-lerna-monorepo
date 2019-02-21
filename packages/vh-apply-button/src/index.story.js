import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHApplyButton from '.'

storiesOf('Molecules/ApplyButton', module)

.add('Button user applied', () => (
  <VHApplyButton
    applied={true}
    _cta={action()}
    large
    />
))

.add('Button user not applied', () => (
  <VHApplyButton
    applied={false}
    _cta={action({props:'adas'})}
    large
  />
))

.add('Button forcing loadding', () => (
  <VHApplyButton
    applied={false}
    loading
    _cta={action({props:'adas'})}
    large
  />
))

.add('Button user not applied with diferent label', () => (
  <VHApplyButton
    applied={false}
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))

.add('Button user not applied with diferent label and loading', () => (
  <VHApplyButton
    loading
    applied={false}
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))
.add('Button user not applied with diferent label full width', () => (
  <VHApplyButton
    applied={false}
    fullWidth
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))

