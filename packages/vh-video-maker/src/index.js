// import React from 'react'
// import RecordRTC from 'recordrtc'

// const hasGetUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia
// const captureUserMedia = callback => {
//   var params = { audio: true, video: true }

//   navigator.getUserMedia(params, callback, (error) => {
//     alert(JSON.stringify(error))
//   })
// }

// class RecordPage extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       recordVideo: null,
//     }

//     this.requestUserMedia = this.requestUserMedia.bind(this)
//     this.startRecord = this.startRecord.bind(this)
//     this.stopRecord = this.stopRecord.bind(this)
//   }

//   componentDidMount() {
//     if(!hasGetUserMedia) {
//       alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.")
//       return
//     }
//     this.requestUserMedia()
//   }

//   requestUserMedia() {
//     console.log('requestUserMedia')
//     captureUserMedia((stream) => {
//       window.localStream = stream
//       var video = document.getElementById('myvideo')
//       video.srcObject = stream
//       video.play()
//     })
//   }

//   startRecord() {
//     captureUserMedia((stream) => {
//       this.state.recordVideo = RecordRTC(stream, { type: 'video' })
//       this.state.recordVideo.startRecording()
//     })

//     setTimeout(() => {
//       this.stopRecord()
//     }, 10000)
//   }

//   enable = () => {
//     captureUserMedia((stream) => {
//       window.localStream = stream
//       var video = document.getElementById('myvideo')
//       video.srcObject = stream
//       video.play()
//     })
//   }
//   stopRecord() {
//     // stop only audio
//     localStream.getAudioTracks()[0].stop()
//     //stop only audio
//     localStream.getVideoTracks()[0].stop()

//     this.state.recordVideo.stopRecording(() => {
//       var video2 = document.getElementById('myvideo2')
//       video2.src = window.URL.createObjectURL(this.state.recordVideo.blob)
//     })
//   }

//   render() {
//     return(
//       <div>
//         <div><video muted id="myvideo" controls /></div>
//         <div><video id="myvideo2" controls /></div>
//         {this.state.uploading ?
//           <div>Uploading...</div> : null}
//         <div><button onClick={this.startRecord}>Start Record</button></div>
//         <div><button onClick={this.stopRecord}>Stop Record</button></div>
//         <div><button onClick={this.enable}>enable Record</button></div>
//       </div>
//     )
//   }
// }

// export default RecordPage

