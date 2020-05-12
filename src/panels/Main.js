import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Reaudio from 'reaudio'
import 'reaudio/build/index.css'


const playlist = [
  {
      id: '1',
      source: 'https://studio.bio/reaudio/iiwii.mp3',
      trackName: 'IIWII',
      trackArtist: 'Joshua Iz',
      trackImage: 'https://studio.bio/reaudio/images/VIZLP1.jpg',
      loop: true
  },
  {
      id: '2',
      source: [
          'https://studio.bio/reaudio/Rafael.aif',
          'https://studio.bio/reaudio/Rafael.mp3'
      ],
      trackName: 'Rafael',
      trackArtist: 'Joshua Iz',
  },
  {
      id: '3',
      source: 'https://studio.bio/reaudio/Voyager_1.mp3',
      trackName: 'Voyager 1',
      trackArtist: 'Joshua Iz',
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
