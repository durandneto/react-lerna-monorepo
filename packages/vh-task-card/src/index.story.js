import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHTaskCard from '.'

storiesOf('Molecules/Cards/Task Card', module)
.add('VHTaskCard Default',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
  <VHTaskCard onClick={action()}/>
))
.add('VHTaskCard done',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
  <VHTaskCard done onClick={action()}/>
))
.add('VHTaskCard all ',
  withInfo(`
    import VHTaskCard from 'vh-task-card'
  `)(() =>
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <VHTaskCard done onClick={action()}/>
    <VHTaskCard onClick={action()}/>
    <VHTaskCard done onClick={action()}/>
    <VHTaskCard onClick={action()}/>
  </div>
))

