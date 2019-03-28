import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHVideoMaker from '.'

storiesOf('Components/Video Maker', module)
.add('VHVideoMaker with 30 seconds',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

  `)(() =>
  <VHVideoMaker
    seconds={30}
    onRequestMedia={action()}
    onRecordMedia={action()}
    onCancelInitialRecord={action()}
    />
))
.add('VHVideoMaker with 5 seconds',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

    ~~~

  `)(() =>
  <VHVideoMaker
    seconds={5}
    onRequestMedia={action()}
    onRecordMedia={action()}
    onCancelInitialRecord={action()}
    />
))

.add('VHVideoMaker with 1 seconds and mock test result',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

  `)(() =>
  <VHVideoMaker
    mockTest
    seconds={1}
    onRequestMedia={action()}
    onRecordMedia={action()}
    onCancelInitialRecord={action()}
    />
  ))
.add('VHVideoMaker with 1 seconds and mock test result and width 100%',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

  `)(() =>
  <VHVideoMaker
    mockTest
    fullwidth
    seconds={1}
    onRequestMedia={action()}
    onRecordMedia={action()}
    onCancelInitialRecord={action()}
    />
))

