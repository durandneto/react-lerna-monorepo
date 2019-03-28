import React, { useState } from 'react'
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

const TasksMock = [
  {
    title: 'Task 01',
    deliverable: '90 sec video',
    type: 'Text',
    done: true,
    time: 1,
  },
  {
    title: 'Task 02',
    deliverable: '60 sec video',
    type: 'video',
    done: true,
    time: 2,
  },
  {
    title: 'Task 03',
    deliverable: '60~80 sec video',
    type: 'Audio',
    done: false,
    time: 80,
  },
  {
    title: 'Task 04',
    deliverable: '60~80 sec video',
    type: 'Text',
    done: true,
    time: 4,
  },
  {
    title: 'Task 05',
    deliverable: '30 sec video',
    type: 'Video',
    done: false,
    time: 30,
  },
]

const VHPageEnglishEvaluation = props => {
  const [defaultTask, setDefaultTask] = useState({
    title: 'Initial Name'
  })
console.log(defaultTask)
  return (
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
                {
                  TasksMock.map((task, indexTask) => {
                    return (
                      <Grid item xs={12} sm={4} md={2}>
                      <VHTaskCard
                        title={task.title}
                        type={task.type}
                        selected={defaultTask.title === task.title}
                        deliverable={task.deliverable}
                        done={task.done || props.tasks[indexTask]} onClick={() => {
                        if ( !task.done && !props.tasks[indexTask]){
                          setDefaultTask(task)
                        }
                      }} />
                    </Grid>
                    )
                  })
                }
            </Grid>
          </div>
          <Grid item xs={12}>
            <div style={{margin: '16px 0'}}>
              <VHText variant="h5" text={defaultTask.title} />
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
                <VHVideoMaker fullwidth seconds={defaultTask.time} onRecordMedia={() => {}} />
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default VHPageEnglishEvaluation
