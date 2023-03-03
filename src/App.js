import './App.css';
import mystery from './assets/mystery.mp3';
import dark from './assets/dark.mp3';
import cheery from './assets/cheery.mp3';

import { useState } from 'react';
import { TrackList } from './components/TrackList';
import { PlayerControls } from './components/PlayerControls';
import { MusicContext } from './contexts/MusicContext';

const App = () => {

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
      name: 'Mystery music..',
      file: mystery
      },
      {
      name: 'Dark music..',
      file: dark
      },
      {
      name: 'Cheery music..',
      file: cheery
      },
    ],
    currentTrackIndex: null,
    isPlaying: false,
  })


  return (
<MusicContext.Provider value={[state, setState]}>
  <h2>Music Player using useContext</h2>
  <div className="App">

    <TrackList />
    <PlayerControls />


  </div>
</MusicContext.Provider>
  );
}

export default App;
