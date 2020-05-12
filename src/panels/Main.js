import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import OAudioPlayer from '@oovui/audio-player-react';

import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute } = controls



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

<Media>
        <div className="media">
          <div className="media-player">
            <Player src="http:\\air2.radiorecord.ru:9003\rr_320" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
  


      </Container>
    </React.Fragment>
    );
  }
}
