import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHPageVideoRecord from '.'

storiesOf('Templates/Video Record', module)
.add('VHPageVideoRecord Default', () => (
  <VHPageVideoRecord
    mockTest
    seconds={60}
    onRequestMedia={action()}
    onRecordMedia={action()}
  />
))

