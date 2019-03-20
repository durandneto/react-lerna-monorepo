import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import VHModal from '.'

storiesOf('Components/Modal/Content', module)
.add('VHModal Default',
  withInfo(`

    import VHModal from 'vh-modal'

    ~~~js
    <VHModal
      open={true}
      cta={{
        label:'Start Test',
        action: action()
      }}
      title="Start English Test"
      onClose={action()}
    >
      modal content
    </VHModal>
    ~~~

  `)(() =>
    <VHModal
      open={true}
      cta={{
        label:'Start Test',
        action: action()
      }}
      onClose={action()}
      title="Start English Test"
    >
      modal content
    </VHModal>
))
.add('VHModal without CTA',
  withInfo(`

    import VHModal from 'vh-modal'

    ~~~js
    <VHModal
      open={true}
      title="Start English Test"
      onClose={action()}
    >
      modal content
    </VHModal>
    ~~~

  `)(() =>
    <VHModal
      open={true}
      onClose={action()}
      title="Start English Test"
    >
      modal content
    </VHModal>
))
.add('VHModal simple',
  withInfo(`

    import VHModal from 'vh-modal'

    ~~~js
    <VHModal
      open={true}
      title="Start English Test"
      onClose={action()}
    >
      modal content
    </VHModal>
    ~~~

  `)(() =>
    <VHModal
      open={true}
      onClose={action()}
    >
      modal content
    </VHModal>
))

