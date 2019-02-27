import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import VHTitleDescriptionImage from '.'

const data = [
  {
    title: '1 - PROFILE',
    description: 'The first step in the VanHack selection process is a comprehensive profile evaluation. Candidates must have a complete and clear profile that reflects their skills and experience. A complete profile will guarantee the candidate gets matched by our A.I. to the right jobs.',
  },
  {
    title: '2 - ENGLISH',
    description: 'Next, we check the candidate\'s English proficiency through a short assessment: our English Verification. Candidates must be able to read, write, and speak English at an advanced or fluent level.',
  },
  {
    title: '3 - CODE',
    description: 'Next, we check for technical knowledge and problem-solving ability through an assessment that will cover core topics within the candidate\'s main skills of expertise. Commitment and punctuality are also evaluated as this stage, as candidates have limited time to complete the assessment.',
  },
  {
    title: '4 - IN-DEPTH REVIEW',
    description: 'Next, we perform an in-depth review of the applications and select the best ones based on Profile, English and Code Verification results. These candidates are matched to the available positions, and their resumes are sent to the companies for their evaluation.',
  },
  {
    title: '5 - INTERVIEWS',
    description: 'Lastly, the companies select the candidates they would like to interview. These candidates are then prepared by the VanHack team to improve their performance in interview processes, and are interviewed in person in São Paulo during the Recruiting Mission.',
  },
]
storiesOf('Components/TitleDescriptionImage', module)

.add('default', () => (
    <VHTitleDescriptionImage
      source="http://via.placeholder.com/484x798.png"
      data={data}
      title="Selection Process"
    />
))

