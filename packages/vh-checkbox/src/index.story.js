import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import VHCheckbox from '.'

storiesOf('Atoms/Checkbox', module)

  .add('VHCheckbox Partial checked', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  partial label="Canada" value="vanhack1" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={1}  partial label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={2}  partial label="Canada" value="vanhack3" _onChange={action()} checked={true} />
    </Fragment>
  ))

  .add('VHCheckbox Partial checked without label', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  noLabel partial label="Canada" value="vanhack1" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={1}  noLabel partial label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={2}  noLabel partial label="Canada" value="vanhack3" _onChange={action()} checked={true} />
    </Fragment>
  ))

  .add('VHCheckbox Checked', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  label="Canada" value="vanhack1" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={1}  label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={2}  label="Canada" value="vanhack3" _onChange={action()} checked={true} />
    </Fragment>
  ))

  .add('VHCheckbox Checked without label', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  noLabel label="Canada" value="vanhack1" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={1}  noLabel label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      <VHCheckbox rootIndex={0} itemIndex={2}  noLabel label="Canada" value="vanhack3" _onChange={action()} checked={true} />
    </Fragment>
  ))

  .add('VHCheckbox Unchecked', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  label="Canada" value="vanhack1" _onChange={action()} checked={false} />
      <VHCheckbox rootIndex={0} itemIndex={1}  label="Canada" value="vanhack2" _onChange={action()} checked={false} />
      <VHCheckbox rootIndex={0} itemIndex={2}  label="Canada" value="vanhack3" _onChange={action()} checked={false} />
    </Fragment>
  ))

  .add('VHCheckbox Unchecked without label', () => (
    <Fragment>
      <VHCheckbox rootIndex={0} itemIndex={0}  noLabel label="Canada" value="vanhack1" _onChange={action()} checked={false} />
      <VHCheckbox rootIndex={0} itemIndex={1}  noLabel label="Canada" value="vanhack2" _onChange={action()} checked={false} />
      <VHCheckbox rootIndex={0} itemIndex={2}  noLabel label="Canada" value="vanhack3" _onChange={action()} checked={false} />
    </Fragment>
  ))

  .add('VHCheckbox All Checkboxes together', () => (
    <Fragment>
      <p>
        <VHCheckbox rootIndex={0} itemIndex={0}  noLabel label="Canada" value="vanhack2" _onChange={action()} checked={false} />
        <VHCheckbox rootIndex={0} itemIndex={1}  noLabel partial label="Canada" value="vanhack2" _onChange={action()} checked={true} />
        <VHCheckbox rootIndex={0} itemIndex={2}  noLabel label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      </p>
      <p>
        <VHCheckbox rootIndex={0} itemIndex={0}  label="Canada" value="vanhack2" _onChange={action()} checked={false} />
        <VHCheckbox rootIndex={0} itemIndex={1}  partial label="Canada" value="vanhack2" _onChange={action()} checked={true} />
        <VHCheckbox rootIndex={0} itemIndex={2}  label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      </p>
      <p>
        <VHCheckbox rootIndex={0} itemIndex={0}  label="Canada" value="vanhack2" _onChange={action()} checked={false} />
        <VHCheckbox rootIndex={0} itemIndex={1}  partial label="Canada" value="vanhack2" _onChange={action()} checked={true} />
        <VHCheckbox rootIndex={0} itemIndex={2}  label="Canada" value="vanhack2" _onChange={action()} checked={true} />
      </p>
    </Fragment>
  ))
