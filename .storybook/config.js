import React from 'react'
import {configure} from '@storybook/react'
import '@storybook/addon-console'

function loadStories () {
  require('glob-loader!./stories.pattern')
}
// addDecorator(withInfo)
configure(loadStories, module)