import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VHApplyButton from '.'

storiesOf('Molecules/ApplyButton', module)

.add('VHApplyButton user applied', () => (
  <VHApplyButton
    applied={true}
    _cta={action()}
    large
    />
))

.add('VHApplyButton user not applied', () => (
  <VHApplyButton
    applied={false}
    _cta={action({props:'adas'})}
    large
  />
))

.add('VHApplyButton forcing loadding', () => (
  <VHApplyButton
    applied={false}
    loading
    _cta={action({props:'adas'})}
    large
  />
))

.add('VHApplyButton user not applied with diferent label', () => (
  <VHApplyButton
    applied={false}
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))

.add('VHApplyButton user not applied with diferent label and loading', () => (
  <VHApplyButton
    loading
    applied={false}
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))
.add('VHApplyButton user not applied with diferent label full width', () => (
  <VHApplyButton
    applied={false}
    fullWidth
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))

.add('VHApplyButton user not applied with diferent label full width disabled', () => (
  <VHApplyButton
    applied={false}
    fullWidth
    disabled
    label="Create an User"
    _cta={action({props:'adas'})}
    large
  />
))

