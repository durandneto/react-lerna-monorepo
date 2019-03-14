import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHCardImageTitleList from '.'


const mock = {
    source: "http://via.placeholder.com/69x96.png",
    title: "Resources",
    list:[
        {
            bullet: false,
            text: "These are the resources you will need to record your videos and complete the test:"
        },
        {
            bullet: true,
            text: "A quiet room with good lighting"
        },
        {
            bullet: true,
            text: "A computer with a webcam or a mobile device able record good quality videos"
        },
        {
            bullet: true,
            text: "A good and consistent Internet connection (WiFi or Ethernet are advisable)"
        },
        {
            bullet: false,
            text: "That’s all you will need!"
        },
    ]
}

storiesOf('Components/Cards/Image Title List', module)
.add('VHCardImageTitleList Default', () => (
    <VHCardImageTitleList data={mock} />
))

