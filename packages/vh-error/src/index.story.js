import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VHError from '.'

storiesOf('Components/Error', module)

.add('Button default', () => (
  <VHError
    title="Oops!"
    subTitle="Internal Server Error"
    message="foi encontrado um erro enquanto esavamos tentando fazer"
    statusCode={500}
    cta={{
      label: "Back to Login",
      action: action()
    }}
  />
))

