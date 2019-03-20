import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHTimer from '.'
var tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

storiesOf('Components/Timer', module)
.add('VHTimer Default',
  withInfo(`

    import VHTimer from 'vh-timer'

    ~~~js
    <VHTimer startDate="${tomorrow.toString()}"/>
    ~~~

  `)(() =>
  <VHTimer
    startDate={tomorrow.toString()}
    onEndTime={action()}
  />
))
.add('VHTimer Default with debugger',
  withInfo(`

    import VHTimer from 'vh-timer'

    ~~~js
    <VHTimer startDate="${tomorrow.toString()}"/>
    ~~~

  `)(() =>
  <VHTimer
    debugger
    startDate={tomorrow.toString()}
    onEndTime={action()}
  />
))

