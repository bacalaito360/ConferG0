import React, { Component } from 'react';
import socketIOClient from 'socket.io-client'
import './App.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import MicrophoneOn from '@material-ui/icons/Mic';
// import MicrophoneOff from '@material-ui/icons/MicOff';
// import { ReactMic } from 'react-mic';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Conference from './components/Conference'
import Landing from './components/Landing'
import Header from './components/Header'
import NotFound from './components/NotFound'
import InputId from './components/ExistingConferenceId'
import ConferenceLanguage from './components/ConferenceLanguage'



class App extends Component {
  render() {
    // const { isRecording } = this.state;
    return (
      <Router>
        <div >
          <Header />
          <br />
          <br />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/conference/:id" component={Conference} />
            <Route exact path="/inputconfid" component={InputId} />
            <Route exact path="/ConferenceLanguage" component={ConferenceLanguage} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
