import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import VHBreadcrumb from '.'

storiesOf('Molecules/Breadcrumb', module)
.add('VHBreadcrumb Default',
  withInfo(`

    import VHBreadcrumb from 'vh-breadcrumb'

    ~~~js
    <VHBreadcrumb title="English Verification" onClick={action()}/>
    ~~~

  `)(() =>
  <VHBreadcrumb title="English Verification" onClick={action()}/>
))

