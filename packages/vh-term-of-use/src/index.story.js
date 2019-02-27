import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHTermOfUse from '.'

storiesOf('Components/TermOfUse', module)

.add('default', () => (
    <VHTermOfUse onValidate={action()} />
))

