import React, { useState } from 'react'
import { Grid } from '@material-ui/core'
import VHCardImageTitleList from 'vh-card-image-title-list'
import VHCardImageTitleDescriptionAction from 'vh-card-image-title-description-action'
import VHApplyButton from 'vh-apply-button'
import VHFaq from 'vh-faq'
import VHConfirmModal from 'vh-confirm-modal'
import VHModal from 'vh-modal'
import VHPageVideoRecord from 'vh-page-video-record'


import {
  CTAWrap,
  CardWrap,
  Container,
  CardContainer,
} from './index.styles'

const VHPageEnglishVerification = props => {
  const [open, setOpenModal] = useState(false);
  const [openTest, setOpenModalTest] = useState(false);
  return (
    <Grid container justify="center" direction="column">
      <VHModal
        open={openTest}
        onClose={
          () => {
            setOpenModalTest(!openTest)
          }
        }
      >
        <VHPageVideoRecord
          mockTest
          seconds={3}
          onRequestMedia={() => {}}
          onRecordMedia={() => {}}
        />
      </VHModal>
      <VHConfirmModal
        open={open}
        cta={{
          label:'Start Test',
          action: () =>{
            setOpenModal(!open)
            setOpenModalTest(!openTest)
          }
        }}
        onClose={
          () => {
            setOpenModal(!open)
          }
        }
        title="Start English Test"
        description="By starting your English test now you have 72 hours to complete all its five tasks. " />
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
            <VHCardImageTitleDescriptionAction data={{
              ...props.cardAction,
              cta: {
                label: props.cardAction.label,
                _callback: () => {
                  setOpenModal(!open)
                }
              }
            }}/>
          </CTAWrap>
        </Container>
      </Grid>
      <Grid item sm={12} container justify="center">
        <Container>
          <VHApplyButton
            fullWidth={true}
            label="START ENGLISH TEST"
            _cta={props.onStartTest}
            large
            />
          </Container>
      </Grid>
    </Grid>
  )
}

export default VHPageEnglishVerification
