import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info';

import VHHeaderCountdown from '.'
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

storiesOf('Components/Header/Countdown', module)
.add('VHHeaderCountdown Default',
  withInfo(`
    import VHHeaderCountdown from 'vh-header-countdown'
  `)(() =>
    <div style={{margin: '0 50px'}}>
      <VHHeaderCountdown
        title="English Verification"
        onGoHome={action()}
        endDate={tomorrow.toString()}
        onEndTime={action()}
      />
    </div>
))

