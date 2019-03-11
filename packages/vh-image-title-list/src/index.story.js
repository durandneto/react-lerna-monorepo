import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHImageTitleList from '.'

const mock = {
    source: "http://via.placeholder.com/69x96.png",
    title: "Basic Instructions",
    list:[
        {
            bullet: false,
            text: "The test consists of five questions."
        },
        {
            bullet: true,
            text: "Your mission is to record five videos, one for each question. That’s all you need to do: read the instructions and record 5 videos."
        },
        {
            bullet: false,
            text: "Our system will guide you through the whole process, which is easy, fast, and dynamic."
        },
    ]
}

const mock2 = {
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

storiesOf('Molecules/ImageTitleList', module)

.add('default', () => (
    <VHImageTitleList data={mock} />
))
.add('multiple', () => (
    <React.Fragment>
        <div style={{margin: "8px 0"}}>
            <VHImageTitleList data={mock} />
        </div>
        <div style={{margin: "8px 0"}}>
            <VHImageTitleList data={mock2} />
        </div>
    </React.Fragment>
))

