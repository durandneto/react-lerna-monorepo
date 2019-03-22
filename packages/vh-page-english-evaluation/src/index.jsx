import React from 'react'
import { Grid } from '@material-ui/core'
import VHHeaderCountdown from 'vh-header-countdown'
import VHVideoMaker from 'vh-video-maker'
import VHText from 'vh-text'
import VHTaskCard from 'vh-task-card'
import VHTitleDescription from 'vh-title-description'
import VHImageTitleList from 'vh-image-title-list'
import VHMediaSource from 'vh-media-source'

const TipsMock = {
  title: "Tips",
  list:[
      {
          bullet: true,
          text: "Ensure that you are in a well lit room and that your face can be easily seen on the video"
      },
      {
          bullet: true,
          text: "Your answer has to be between 60 to 80 seconds, no more, no less"
      },
      {
          bullet: true,
          text: "Do a test recording to check if audio and video are working properly."
      },
  ]
}

const VHPageEnglishEvaluation = props => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{maxWidth:"1010px"}}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <VHHeaderCountdown
            title="English Verification"
            onGoHome={() => {}}
            endDate="Sat Mar 23 2019 08:41:51 GMT-0300 (Brasilia Standa…"
            onEndTime={() => {}}
          />
        </Grid>
        <div style={{margin: '16px 0', maxWidth: '100%'}}>
          <Grid container  justify="space-between" >
              <Grid item xs={12} sm={4} md={2}>
                <VHTaskCard done={props.tasks[0]} onClick={() => {}} />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <VHTaskCard done={props.tasks[1]} onClick={() => {}} />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <VHTaskCard done={props.tasks[2]} onClick={() => {}} />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <VHTaskCard done={props.tasks[3]} onClick={() => {}} />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <VHTaskCard done={props.tasks[4]} onClick={() => {}} />
              </Grid>
          </Grid>
        </div>
        <Grid item xs={12}>
          <div style={{margin: '16px 0'}}>
            <VHText variant="h5" text="Task 01" />
          </div>
        </Grid>
        <Grid container item xs={12}>
          <Grid item md={6} sm={12}>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHTitleDescription
                title="Action"
                direction="column"
                type="Highlight"
                alignStart
                description="Watch the video, take notes, follow the instructions, record your 60 ~ 80 second video, click on send"
              />
            </div>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHTitleDescription
                title="Instructions"
                direction="column"
                type="Highlight"
                alignStart
                description="Play the video twice, taking notes about the content, key words, key topics, or anything else that you may find relevant. Read the question below. Watch the video again. Record your video answering the question below. Click the send button."
              />
            </div>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHTitleDescription
                title="Question"
                direction="column"
                type="Highlight"
                alignStart
                description="The Idea Of God Is Not Henceforth Relevant??????"
              />
            </div>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHImageTitleList data={TipsMock} />
            </div>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHText variant="h6" text="Content" />
            </div>
            <div style={{margin: '16px 16px 16px 0'}}>
              <VHMediaSource
                width="100%"
                source="https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
                controls
              />
            </div>
          </Grid>
          <Grid item md={6} sm={12}>
            <Grid item xs={12}>
              <VHText variant="h6" text="Your Video" />
            </Grid>
            <Grid item xs={12}>
              <VHVideoMaker fullwidth seconds={3} onRecordMedia={() => {}} />
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  </div>
  </div>
)

export default VHPageEnglishEvaluation
