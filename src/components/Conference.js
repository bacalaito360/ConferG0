import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import * as ss from 'socket.io-stream'
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';

import MicrophoneOn from '@material-ui/icons/Mic';
import MicrophoneOff from '@material-ui/icons/MicOff';
import { ReactMic } from 'react-mic';




class Conference extends Component {
  socket;
  constructor(props) {
    super()
    this.state = {
      blobObject: null,
      isRecording: false,
      endpoint: "localhost:3001"
    }

    this.socket = socketIOClient(this.state.endpoint)
  }

  startRecording = () => {
    this.setState({
      isRecording: true
    });
  }

  stopRecording = () => {
    this.setState({
      isRecording: false
    });
  }

  onSave = (blobObject) => {
  }

  onStart = () => {
    console.log('You can tap into the onStart callback');
  }

  onStop = (blobObject) => {
    this.setState({
      blobURL: blobObject.blobURL
    });
  }

  onData(recordedBlob) {
    const socket1 = socketIOClient("localhost:3001")
    console.log('chunk of real-time data is: ', recordedBlob);
    const obj = {};
    const stream = ss.createStream();
    ss(socket1).emit('audio-stream', stream, obj);
    const blobStream = ss.createBlobReadStream(recordedBlob);
    let size = 0;
    blobStream.on('data', chunk => {
      size += chunk.length;

    });

    blobStream.pipe(stream);
    blobStream.on('end', () => {
      console.log('done');
    });

  }
  render() {
    const { isRecording } = this.state;
    return (
      <div >

        <div className="container border">
          <h1>Conference Id:</h1>
          <h3><span className="id">{this.props.match.params.id}</span></h3>
          <div className="convo-text">

          </div>
          <br />
          <br />
          <ReactMic
            className="oscilloscope"
            record={isRecording}
            backgroundColor="#FF4081"
            visualSetting="sinewave"
            audioBitsPerSecond={128000}
            onStop={this.onStop}
            onStart={this.onStart}
            onSave={this.onSave}
            onData={this.onData}
            strokeColor="#000000" />
          <br />
          <br />
          <button
            className="btn"
            secondary="true"
            disabled={isRecording}
            onClick={this.startRecording}>
            <MicrophoneOn />start
              </button>
          <button
            className="btn"
            secondary="true"
            disabled={!isRecording}
            onClick={this.stopRecording}>
            <MicrophoneOff />mute
            </button>
        </div>



      </div>
    );
  }
}

export default Conference;
