import React from 'react'
import { Grid } from '@material-ui/core'
import VHCardImageTitleList from 'vh-card-image-title-list'
import VHCardImageTitleDescriptionAction from 'vh-card-image-title-description-action'
import VHApplyButton from 'vh-apply-button'
import VHFaq from 'vh-faq'
import {
  CTAWrap,
  CardWrap,
  Container,
  CardContainer,
} from './index.styles'

const VHPageEnglishVerification = props => (
  <Grid container justify="center" direction="column">
    <CardContainer>
      {
        props.cards.map((card, index) => (
          <CardWrap item key={`VHPageEnglishVerification-main-card-${index}`}>
              <VHCardImageTitleList data={card} />
            </CardWrap>
        ))
      }
    </CardContainer>
    <Grid item sm={12} container justify="center">
      <VHFaq
        primary
        tabs = { props.faq }
      />
    </Grid>
    <Grid item sm={12} container justify="center">
      <Container>
        <CTAWrap item>
          <VHCardImageTitleDescriptionAction data={props.cardAction}/>
        </CTAWrap>
      </Container>
    </Grid>
    <Grid item sm={12} container justify="center">
      <Container>
        <VHApplyButton
          fullWidth={true}
          label="START ENGLISH TEST"
          _cta={() => {}}
          large
          />
        </Container>
    </Grid>
  </Grid>
)

export default VHPageEnglishVerification
