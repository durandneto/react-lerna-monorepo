import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHVideoMaker from '.'

storiesOf('Components/Video Maker', module)
.add('VHVideoMaker with 30 seconds',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

    ~~~js
    <VHVideoMaker
        seconds={30}
        onRequestMedia={this.handleOnRequestMedia}
        onRecordMedia={this.handleOnRecordMedia}
    />
    ~~~

  `)(() =>
  <VHVideoMaker
    seconds={30}
    onRequestMedia={action()}
    onRecordMedia={action()}
    />
))
.add('VHVideoMaker with 5 seconds',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

    ~~~js
    <VHVideoMaker
        seconds={5}
        onRequestMedia={this.handleOnRequestMedia}
        onRecordMedia={this.handleOnRecordMedia}
    />
    ~~~

  `)(() =>
  <VHVideoMaker
    seconds={5}
    onRecordMedia={action()}
    onRecordMedia={action()}
    />
))

.add('VHVideoMaker with 1 seconds and mock test result',
  withInfo(`

    import VHVideoMaker from 'vh-video-maker'

    ~~~js
    <VHVideoMaker
        mockTest
        seconds={1}
        onRequestMedia={this.handleOnRequestMedia}
        onRecordMedia={this.handleOnRecordMedia}
    />
    ~~~

  `)(() =>
  <VHVideoMaker
    mockTest
    seconds={1}
    onRecordMedia={action()}
    onRecordMedia={action()}
    />
))

