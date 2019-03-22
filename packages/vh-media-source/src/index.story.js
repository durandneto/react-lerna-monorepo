import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHMediaSource from '.'

storiesOf('Molecules/MediaSource', module)
.add('VHMediaSource Default',
  withInfo(`
    import VHMediaSource from 'vh-media-source'
  `)(() =>
  <VHMediaSource
    source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
    controls
  />
))

