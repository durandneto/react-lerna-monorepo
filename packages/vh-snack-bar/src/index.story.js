import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHSnackBar from '.'

storiesOf('Components/SnackBar', module)

.add('wrapped success', () => (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <VHSnackBar
        onClose={action()}
        type="success"
        message="This is a success message!"
    />
    </div>
))

.add('default', () => (
        <VHSnackBar
        onClose={action()}
        message="This is a success message!"
    />
))

.add('success', () => (
        <VHSnackBar
        onClose={action()}
        type="success"
        message="This is a success message!"
    />
))

.add('error', () => (
        <VHSnackBar
        onClose={action()}
        type="error"
        message="This is a success message!"
    />
))

.add('warning', () => (
        <VHSnackBar
        onClose={action()}
        type="warning"
        message="This is a success message!"
    />
))

