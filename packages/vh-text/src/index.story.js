import React from 'react'
import { storiesOf } from '@storybook/react'
import VHText from '.'

storiesOf('Atoms/Text', module)
  .add('Typograph from material ui', () => (
    <div>
      <VHText variant="h1" text="h1. Heading" />
      <VHText variant="h2" text="h2. Heading" />
      <VHText variant="h3" text="h3. Heading" />
      <VHText variant="h4" text="h4. Heading" />
      <VHText variant="h5" text="h5. Heading" />
      <VHText variant="h6" text="h6. Heading" />
      <VHText variant="subtitle1" text="subtitle1" />
      <VHText variant="subtitle2" text="subtitle2" />
      <VHText variant="body1" text="body1" />
      <VHText variant="body2" text="body2" />
      <VHText variant="button" text="button" />
      <VHText variant="caption" text="caption" />
      <VHText variant="overline" text="overline" />
    </div>
  ))
  .add('Typograph from material ui centered', () => (
    <div>
      <VHText align="center" variant="h1" text="h1. Heading" />
      <VHText align="center" variant="h2" text="h2. Heading" />
      <VHText align="center" variant="h3" text="h3. Heading" />
      <VHText align="center" variant="h4" text="h4. Heading" />
      <VHText align="center" variant="h5" text="h5. Heading" />
      <VHText align="center" variant="h6" text="h6. Heading" />
      <VHText align="center" variant="subtitle1" text="subtitle1" />
      <VHText align="center" variant="subtitle2" text="subtitle2" />
      <VHText align="center" variant="body1" text="body1" />
      <VHText align="center" variant="body2" text="body2" />
      <VHText align="center" variant="button" text="button" />
      <VHText align="center" variant="caption" text="caption" />
      <VHText align="center" variant="overline" text="overline" />
    </div>
  ))
  .add('Typograph from material ui aligned right', () => (
    <div>
      <VHText align="right" variant="h1" text="h1. Heading" />
      <VHText align="right" variant="h2" text="h2. Heading" />
      <VHText align="right" variant="h3" text="h3. Heading" />
      <VHText align="right" variant="h4" text="h4. Heading" />
      <VHText align="right" variant="h5" text="h5. Heading" />
      <VHText align="right" variant="h6" text="h6. Heading" />
      <VHText align="right" variant="subtitle1" text="subtitle1" />
      <VHText align="right" variant="subtitle2" text="subtitle2" />
      <VHText align="right" variant="body1" text="body1" />
      <VHText align="right" variant="body2" text="body2" />
      <VHText align="right" variant="button" text="button" />
      <VHText align="right" variant="caption" text="caption" />
      <VHText align="right" variant="overline" text="overline" />
    </div>
  ))
  .add('Typograph with colors', () => (
    <div>
      <div style={{backgroundColor:"#0675CE"}}>
        <VHText color="white" variant="h1" text="h1. White" />
      </div>
      <VHText color="primary" variant="h2" text="h2. Primary" />
    </div>
  ))
