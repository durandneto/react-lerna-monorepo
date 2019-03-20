import React from 'react'
import { Grid } from '@material-ui/core'
import VHApplyButton from 'vh-apply-button'
import VHProgress from 'vh-progress'
import VHIconTitleDescription from 'vh-icon-title-description'
import VHModal from 'vh-confirm-modal'

// import RecordRTC from 'recordrtc'

import {
  AllowContainer,
  PageContainer,
  ControlsContainer,
} from './index.styles'

const hasGetUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia
const captureUserMedia = callback => {
  var params = {video: true, audio: true }

  navigator.getUserMedia(params, callback, (error) => {
    // alert('Media Error')
  })
}
const captureUserVideo = callback => {
  var params = {video: true, audio: false}

  navigator.getUserMedia(params, callback, (error) => {
    // alert('video error')
  })
}

const captureUserAudio = callback => {
  var params = {audio: true, video: false}

  navigator.getUserMedia(params, callback, (error) => {
    // alert('Audio error')
  })
}

const ModalStartEnglishTestMessage = {
  title: 'Start English Test',
  description: 'By starting your English test now you have 72 hours to complete all its five tasks.',
  label: 'Start Test',
  error: false,
}

const ModalSendVideoMessage = {
  title: 'Do you really want to send this video?',
  description: 'By sending this video you are finishing this task so that you wont be able to record another video for this task.',
  label: 'Send',
  error: false,
}

const ModalDiscartVideoMessage = {
  title: 'Do you really want to discarrd this video?',
  description: 'This action can not be undone so make sure you want to discard this video, but you can record another one to send.',
  label: 'Discard Video',
  error: true,
}

class RecordPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordVideo: null,
      allowVideo: false,
      allowAudio: false,
      isRecording: false,
      view: 'initial',
      openConfirmModal: false,
      handleModalMessage: {},
    }

    this.requestUserAudio = this.requestUserAudio.bind(this)
    this.requestUserVideo = this.requestUserVideo.bind(this)
    this.handleStartRecord = this.handleStartRecord.bind(this)
    this.handleResetRecord = this.handleResetRecord.bind(this)
    this.handleStopRecord = this.handleStopRecord.bind(this)
    this.handleOpenConfirmModal = this.handleOpenConfirmModal.bind(this)
    this.handleCloseConfirmModal = this.handleCloseConfirmModal.bind(this)
    this.handleModalCTAClick = this.handleModalCTAClick.bind(this)
  }

  componentDidMount() {
    if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.")
      return
    }
    this.requestUserAudio()
    this.requestUserVideo()
  }

  componentWillUnmount() {
    // stop only audio
    if (localAudioStream)
      localAudioStream.getAudioTracks()[0].stop()
    //stop only audio
    if (localVideoStream)
      localVideoStream.getVideoTracks()[0].stop()
  }

  requestUserVideo() {
    console.log('requestUserVideo: request')
    captureUserVideo((stream) => {
      window.localVideoStream = stream
      this.setState({allowVideo: true})
      if ( this.props.onRequestMedia)
        this.props.onRequestMedia({video: true, audio: this.state.allowAudio})
        console.log('requestUserVideo:',{video: true, audio: this.state.allowAudio})
      var video = document.getElementById('myvideo')
      video.srcObject = stream
      video.play()
    })
}

requestUserAudio() {
  console.log('requestUserAudio: request')
  captureUserAudio((stream) => {
    window.localAudioStream = stream
    this.setState({allowAudio: true})
    if ( this.props.onRequestMedia)
    this.props.onRequestMedia({audio: true, video: this.state.allowVideo})
      console.log('requestUserAudio:',{audio: true, video: this.state.allowVideo})
    })
  }

  handleOpenConfirmModal (type) {
    switch (true) {
      case type === 'StartTest':
        this.setState({
          openConfirmModal: true,
          handleModalMessage: {
            ...ModalStartEnglishTestMessage,
            type: type
          }
        })
        break
      case type === 'SendVideoToApi':
        this.setState({
          openConfirmModal: true,
          handleModalMessage: {
            ...ModalSendVideoMessage,
            type: type
          }
        })
        break
      case type === 'DiscartVideo':
        this.setState({
          openConfirmModal: true,
          handleModalMessage: {
            ...ModalDiscartVideoMessage,
            type: type
          }
        })
        break
    }
  }

  handleModalCTAClick () {
    console.log('click no modal', this.state.handleModalMessage.type)
  }

  handleCloseConfirmModal () {
    this.setState({
      openConfirmModal: false,
    })
  }

  handleStartRecord() {
    console.log('start recording')
    captureUserMedia((stream) => {
      this.setState({isRecording: true, view: 'recordingVideo'})
    // //   this.state.recordVideo = RecordRTC(stream, { type: 'video' })
    // //   this.state.recordVideo.startRecording()
    })

    setTimeout(() => {
      this.handleStopRecord()
    }, this.props.seconds * 1000)
  }

  handleResetRecord() {
    console.log('reset recording')
    this.setState({isRecording: false, view: 'initial'})
  }

  enable = () => {
    captureUserMedia((stream) => {
      window.localStream = stream
      var video = document.getElementById('myvideo')
      video.srcObject = stream
      video.play()
    })
  }
  handleStopRecord() {
    // // stop only audio
    // localStream.getAudioTracks()[0].stop()
    // //stop only audio
    // localStream.getVideoTracks()[0].stop()

    // this.state.recordVideo.stopisRecording(() => {
    //   var video2 = document.getElementById('myvideo2')
    //   video2.src = window.URL.createObjectURL(this.state.recordVideo.blob)
    // })
    if (this.state.isRecording) {
      console.log('ended recording')
      this.setState({isRecording: false, view: 'sendVideoToApi'})
    }
  }

  render() {
    return (
      <Grid container justify="flex-end">
        <Grid item xs={12}>
          <VHModal
            open={this.state.openConfirmModal}
            error={this.state.handleModalMessage.error}
            onClose={this.handleCloseConfirmModal}
            cta={{
              label: this.state.handleModalMessage.label,
              action: () => {this.handleModalCTAClick()}
            }}
            title={this.state.handleModalMessage.title}
            description={this.state.handleModalMessage.description} />
          <PageContainer noVideo={!this.state.allowVideo}>
            {
              this.state.allowVideo && (
                <video muted id="myvideo" height="342"/>
              )
            }
            <ControlsContainer>
            {
              (!this.state.allowAudio) && (
                <AllowContainer>
                  {
                    !this.state.allowAudio && (
                      <button onClick={this.requestUserAudio}>
                        Check Audio
                      </button>
                    )
                  }
                </AllowContainer>
              )
            }
            {
              (!this.state.allowVideo) && (
                <AllowContainer>
                  {
                    !this.state.allowVideo && (
                      <button onClick={this.requestUserVideo}>
                        Check Video
                      </button>
                    )
                  }
                </AllowContainer>
              )
            }
          </ControlsContainer>

            {/* <div><video id="myvideo2" controls /></div>
            {this.state.uploading ?
              <div>Uploading...</div> : null}
            <div><button onClick={this.startRecord}>Start Record</button></div>
            <div><button onClick={this.stopRecord}>Stop Record</button></div>
            <div><button onClick={this.enable}>enable Record</button></div> */}
          </PageContainer>
        </Grid>
        <Grid container justify="flex-end">
          <Grid item xs={12}>
            {`audio: ${this.state.allowAudio} - video: ${this.state.allowVideo}`}
          </Grid>
        </Grid>
          {
            this.state.view === 'initial' && (
              <Grid container justify="flex-end">
                <Grid item xs={12}>
                  {
                    <VHApplyButton
                      fullWidth
                      isDisabled={!this.state.allowAudio || !this.state.allowVideo}
                      label="RECORD"
                      _cta={()=> {
                        this.handleStartRecord()
                      }}
                      large
                    />
                  }
                </Grid>
              </Grid>
            )
          }
          {
            this.state.view === 'sendVideoToApi' && (
              this.props.mockTest ? (
                <Grid container justify="flex-end">
                  <Grid item xs={12} style={{margin: '16px 0'}}>
                    <VHIconTitleDescription
                      description="Your microphone and camera are ready to be used on the VanHack English Verification Test."
                      icon={{icon: 'check-circle'}}
                      onClick={()=>{}}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <VHApplyButton
                      fullWidth
                      isDisabled={!this.state.allowAudio || !this.state.allowVideo}
                      label="Go back to Instructions"
                      outline
                      _cta={()=> {
                        this.handleResetRecord()
                      }}
                      large
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <VHApplyButton
                      fullWidth
                      label="Start your English Verification Test"
                      _cta={()=> {
                        // this.props.onRecordMedia({media: 'ended'})
                        this.handleOpenConfirmModal('StartTest')
                      }}
                      large
                    />
                  </Grid>
                </Grid>
              ) : (
                <Grid container justify="flex-end">
                  <Grid item xs={4}>
                    <VHApplyButton
                      fullWidth
                      isDisabled={!this.state.allowAudio || !this.state.allowVideo}
                      label="cancel"
                      outline
                      color="secondary"
                      _cta={()=> {
                        // this.handleResetRecord()
                        this.handleOpenConfirmModal('DiscartVideo')
                      }}
                      large
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <VHApplyButton
                      fullWidth
                      isDisabled={!this.state.allowAudio || !this.state.allowVideo}
                      label="send"
                      _cta={()=> {
                        // this.props.onRecordMedia({media: 'ended'})
                        this.handleOpenConfirmModal('SendVideoToApi')
                      }}
                      large
                    />
                  </Grid>
                </Grid>
              )
            )
          }
          {
            this.state.view === 'recordingVideo' && (
              <Grid container justify="flex-end">
                <Grid item xs={12}>
                  {
                    <VHProgress
                      start={true}
                      color="secondary"
                      seconds={this.props.seconds}
                    />
                  }
                </Grid>
                <Grid item xs={12}>
                  <VHApplyButton
                    fullWidth
                    isDisabled={!this.state.allowAudio || !this.state.allowVideo}
                    label="cancel"
                    outline
                    color="secondary"
                    _cta={()=> {
                      this.handleResetRecord()
                    }}
                    large
                  />
                </Grid>
              </Grid>
            )
          }
      </Grid>
    )
  }
}

export default RecordPage

