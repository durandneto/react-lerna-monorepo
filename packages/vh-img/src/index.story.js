import React from 'react'
import { storiesOf } from '@storybook/react'
import VHImg from '.'

const iconMaterial = {
    icon: 'check'
}

const iconMaterial2 = {
    icon: 'check-circle'
}

storiesOf('Atoms/Img', module)

.add('VHImg Image', () => (<VHImg source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg" />))

.add('VHImg default Icon', () => (<VHImg icon={iconMaterial}/>))
.add('VHImg success Icon', () => (<VHImg success icon={iconMaterial2}/>))
.add('VHImg error Icon', () => (<VHImg error icon={iconMaterial}/>))
.add('VHImg cam', () => (
    <React.Fragment>
        <VHImg success icon={{icon: 'cam'}}/>
        <VHImg icon={{icon: 'cam'}}/>
        <br />
        <VHImg error icon={{icon: 'cam-off'}}/>
        <VHImg icon={{icon: 'cam-off'}}/>
    </React.Fragment>
))
.add('VHImg mic', () => (
    <React.Fragment>
        <VHImg success icon={{icon: 'mic'}}/>
        <VHImg error icon={{icon: 'mic'}}/>
    </React.Fragment>
))