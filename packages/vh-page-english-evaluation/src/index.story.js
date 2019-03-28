import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHPageEnglishEvaluation from '.'

const data = {
  id: 1,
  startDate: '2019-03-28 19:17:08',
  tasks: [true, true, false, false, false]
}

storiesOf('Templates/English Verification/Evaluation', module)
.add('VHPageEnglishEvaluation Default',
  withInfo(`
    import VHPageEnglishEvaluation from 'vh-page-english-evaluation'
  `)(() =>
  <VHPageEnglishEvaluation
    startDate={data.startDate}
    tasks={data.tasks}
    onClick={action()}/>
))

