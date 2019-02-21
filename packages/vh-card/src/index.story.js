import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import VHCard from '.'

storiesOf('Atoms/Card', module)

  .add('Card Desktop', () => (
    <Fragment>
      <VHCard>
      Content<br />Content<br />Content<br />Content<br />
      </VHCard>
      <VHCard padding2>
      Content with padding2<br />Content with padding2<br />Content with padding2<br />Content with padding2<br />
      </VHCard>
    </Fragment>
  ))

  .add('Card Desktop idle', () => (
    <Fragment>
      <VHCard idle>
      Content idle<br />Content idle<br />Content idle<br />Content idle<br />
      </VHCard>
      <VHCard idle padding2>
      Content idle<br />Content idle<br />Content idle<br />Content idle<br />
      </VHCard>
    </Fragment>
  ))

  .add('Card Desktop Error', () => (
    <Fragment>
      <VHCard error>
      Content Error <br />Content Error <br />Content Error <br />Content Error <br />
      </VHCard>
      <VHCard error padding2>
      Content Error <br />Content Error <br />Content Error <br />Content Error <br />
      </VHCard>
    </Fragment>
  ))

  .add('Card Desktop panel', () => (
    <Fragment>
      <VHCard panel>
      Content Panel <br />Content Panel <br />Content Panel <br />Content Panel <br />
      </VHCard>
    </Fragment>
  ))
