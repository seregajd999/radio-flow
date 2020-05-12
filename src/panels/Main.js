import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import OAudioPlayer from '@oovui/audio-player-react';





export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container>


        <OAudioPlayer 
        url = 'http:\\air2.radiorecord.ru:9003\rr_320'
        title = "Record"
        author = "укеукек" 
        />



      </Container>
    </React.Fragment>
    );
  }
}
