import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHTime from '.'

storiesOf('Molecules/Time', module)
.add('VHTime seconds',
  withInfo(`

    import VHTime from 'vh-time'

    ~~~js
    <VHTime number="4" text="sec"/>
    ~~~

  `)(() =>
  <VHTime number="4" text="sec"/>
))
.add('VHTime minutes',
  withInfo(`

    import VHTime from 'vh-time'

    ~~~js
    <VHTime number="34" text="min"/>
    ~~~

  `)(() =>
  <VHTime number="34" text="min"/>
))
.add('VHTime hours',
  withInfo(`

    import VHTime from 'vh-time'

    ~~~js
    <VHTime number="78" text="hours"/>
    ~~~

  `)(() =>
  <VHTime number="78" text="hours"/>
))
.add('VHTime days',
  withInfo(`

    import VHTime from 'vh-time'

    ~~~js
    <VHTime number="134" text="days"/>
    ~~~

  `)(() =>
  <VHTime number="134" text="days"/>
))

