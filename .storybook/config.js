import React from 'react'
import {configure, setAddon} from '@storybook/react'
import infoAddon, {setDefaults} from '@storybook/addon-info'
import '@storybook/addon-console'

function loadStories () {
  require('glob-loader!./stories.pattern')
}

setAddon(infoAddon)

configure(loadStories, module)
