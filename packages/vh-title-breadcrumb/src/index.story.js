import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'

import VHTitleBreadcrumb from '.'

storiesOf('Components/TitleBreadcrumb', module)
.add('VHTitleBreadcrumb Default',
  withInfo(`
    import VHTitleBreadcrumb from 'vh-title-breadcrumb'
  `)(() =>
  <div style={{margin: '0 50px'}}>
    <VHTitleBreadcrumb title="English Verification" onGoHome={action()}/>
  </div>
))

