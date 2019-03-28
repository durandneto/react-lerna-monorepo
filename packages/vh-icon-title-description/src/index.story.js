import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHIconTitleDescription from '.'

const icon = {
  source: "https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg",
}
const iconMaterial = {
  icon: 'check'
}

storiesOf('Molecules/IconTitleDescription', module)
.add('VHIconTitleDescription Default',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription  title="title - " description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
Click the “RECORD” button bellow to record a quick video and perform the tests." icon={icon} onClick={action()}/>
))
.add('VHIconTitleDescription Default',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription  title="title - " description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
Click the “RECORD” button bellow to record a quick video and perform the tests." icon={icon} onClick={action()}/>
))
.add('VHIconTitleDescription without title',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
  Click the “RECORD” button bellow to record a quick video and perform the tests." icon={iconMaterial} onClick={action()}/>
))
.add('VHIconTitleDescription success without title',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription success description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
  Click the “RECORD” button bellow to record a quick video and perform the tests." icon={iconMaterial} onClick={action()}/>
))
.add('VHIconTitleDescription without title',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
  Click the “RECORD” button bellow to record a quick video and perform the tests." icon={iconMaterial} onClick={action()}/>
))
.add('VHIconTitleDescription without icon',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

    ~~~js
    <VHIconTitleDescription description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
Click the “RECORD” button bellow to record a quick video and perform the tests." title="title" onClick={action()}/>
    ~~~

  `)(() =>
  <VHIconTitleDescription description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
Click the “RECORD” button bellow to record a quick video and perform the tests." title="title" onClick={action()}/>
))
.add('VHIconTitleDescription without title and icon',
  withInfo(`

    import VHIconTitleDescription from 'vh-icon-title-description'

  `)(() =>
  <VHIconTitleDescription description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise.
Click the “RECORD” button bellow to record a quick video and perform the tests." onClick={action()}/>
))

