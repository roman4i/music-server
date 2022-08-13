import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import BodyBox from '../BodyBox/BodyBox';
import PlayerBox from '../PlayerBox/PlayerBox';
import Context from '../../store/context';
import Player from '../Player/Player';
import { plData, songsList } from '../../store/types';
import serverAdrrList from '../../store/server-adress';
import { getSongsList } from '../../api/songs';

function App() {
    const startData: plData = {
      src: '',
      id: '',
      playing: false,
    } 

    const [songsList, setSongsList] = useState<songsList>([]);
    const [playerData, setPlayerData] = useState<plData>(startData);

  const contextData = {
    playerSource: {
      playerData,
      setPlayerData,
    },
    songsList: songsList,
    adress: serverAdrrList.outer
  }

  useEffect(() => {
    getSongsList(contextData.adress)
      .then(result => setSongsList(result))
  }, []);

  return (
    <>
      <Context.Provider value={ contextData }>
        <Head />
        <BodyBox songsLists={ songsList } />
        <Player />
      </Context.Provider>
    </>
  );
}

export default App;
