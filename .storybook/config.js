import React from 'react'
import {configure} from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

function loadStories () {
  require('glob-loader!./stories.pattern')
}
// addDecorator(withInfo)
configure(loadStories, module)