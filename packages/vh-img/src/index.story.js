import React from 'react'
import { storiesOf } from '@storybook/react'
import VHImg from '.'

storiesOf('Atoms/Img', module)

.add('VHImg Image', () => (<VHImg source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg" />))

.add('VHImg Icon', () => (<VHImg />))