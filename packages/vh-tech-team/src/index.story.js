import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHTechTeam from '.'

storiesOf('Components/TechTeam', module)
.add('VHTechTeam Default',
  withInfo(`

    import VHTechTeam from 'vh-tech-team'

    ~~~js
    <VHTechTeam onClick={action()}/>
    ~~~

  `)(() =>
  <VHTechTeam onClick={action()}/>
))

