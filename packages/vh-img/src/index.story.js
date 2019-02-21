import React from 'react'
import { storiesOf } from '@storybook/react'
import VHImg from '.'

storiesOf('Atoms/Img', module)

.add('Image', () => (<VHImg source="https://webapp-vanhack-react-prod.azurewebsites.net/a7933bfbd6086f831415aa4ebbda99da.svg" />))

.add('Icon', () => (<VHImg />))
