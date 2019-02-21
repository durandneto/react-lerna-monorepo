import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHTitleApplyButton from '.'

storiesOf('Components/TitleApplyButton', module)

.add('User Applied', () => (
    <VHTitleApplyButton
        title="Leap Calgary  •  April 8th - 10th,  2019"
        _cta={action()}
        applied={true}
    />
))

.add('User not applied', () => (
    <VHTitleApplyButton
        title="Leap Calgary  •  April 8th - 10th,  2019"
        _cta={action()}
        applied={false}
    />
))

.add('User loading', () => (
    <VHTitleApplyButton
        title="Leap Calgary  •  April 8th - 10th,  2019"
        _cta={action()}
        loading
    />
))

