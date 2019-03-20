import React from 'react'
import { Grid } from '@material-ui/core'
import VHImg from 'vh-img'
import VHTitleDescription from 'vh-title-description'
import VHApplyButton from 'vh-apply-button'
import VHVideoMaker from 'vh-video-maker'

class VHPageVideoRecord extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      allowVideo: false,
      allowAudio: false,
    }

    this.handleOnRequestMedia = this.handleOnRequestMedia.bind(this)
  }

  handleOnRequestMedia = UserMedia => {
    this.setState({
      allowVideo: UserMedia.video,
      allowAudio: UserMedia.audio,
    })
  }

  handleOnRecordMedia = Record => {
    console.log('handleOnRecordMedia', Record)
  }

  render() {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={12} sm={2} container justify="center">
            <VHImg source="http://via.placeholder.com/85x89.png"/>
          </Grid>
          <Grid item xs={12} sm={10} direction="row">
            <VHTitleDescription
              direction="column"
              title="Audio and Video Quality Test"
              description="Test the quality of your video and camera, your face must be well lit and on focus. Also test the quality of your audio, the sound of your voice must be clear and free of noise." />
            <VHTitleDescription
              direction="column"
              description="Click the “RECORD” button bellow to record a quick video and perform the tests." />
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item sm={12} md={10}>
            <VHVideoMaker
              mockTest={this.props.mockTest}
              seconds={this.props.seconds}
              onRequestMedia={this.handleOnRequestMedia}
              onRecordMedia={this.handleOnRecordMedia}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

export default VHPageVideoRecord
