import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Reaudio from 'reaudio'
import 'reaudio/build/index.css'

const playlist = [
  {
      id: '1',
      source: 'http:\\air2.radiorecord.ru:9003\rr_320',
      trackName: 'IIWII',
      trackArtist: 'Joshua Iz',
      trackImage: 'https://studio.bio/reaudio/images/VIZLP1.jpg',
      loop: false
  }
]

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <Container>

        <div className="App">
            <h1>Reaudio</h1>
            <Reaudio playlist={playlist} />
        </div>

      </Container>
    </React.Fragment>
    );
  }
}
