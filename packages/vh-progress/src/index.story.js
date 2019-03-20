import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHProgress from '.'

storiesOf('Components/Progress', module)
.add('VHProgress 1 second', () => (
  <VHProgress start={true} seconds={1} onChange={action()} />
))
.add('VHProgress 5 seconds start false ', () => (
  <VHProgress start={false} color="secondary" seconds={5} onChange={action()} />
))
.add('VHProgress 5 seconds ', () => (
  <VHProgress start={true} color="secondary" seconds={5} onChange={action()} />
))
.add('VHProgress 10 seconds', () => (
  <VHProgress start={true} seconds={10} onChange={action()} />
))
.add('VHProgress 30 seconds', () => (
  <VHProgress color="secondary" start={true} seconds={30} onChange={action()} />
))
.add('VHProgress 60 seconds', () => (
  <VHProgress start={true} seconds={60} onChange={action()} />
))
