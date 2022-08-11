import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import BodyBox from '../BodyBox/BodyBox';
import PlayerBox from '../PlayerBox/PlayerBox';
import Context from '../../store/context';
import Player from '../Player/Player';
import { plData, songsList } from '../../store/types';
import serverAdrrList from '../../store/server-adress';

function App() {
    const startData: plData = {
        src: '',
        id: 0,
    } 

    const [songsList, setSongsList] = useState<songsList>([]);
    const [playerData, setPlayerData] = useState<plData>(startData);
    const [playing, setPlaying] = useState(false);

  const contextData = {
    playerSource: {
        playerData: playerData,
        setPlayerData: setPlayerData,
    },
    playerState: {
        playing: playing,
        setPlaying,
    },
    songsList: songsList,
    adress: serverAdrrList.outer
  }

  useEffect(() => {
    
  }, []);

    return (
        <>
            <Context.Provider value={ contextData }>
                <Head />
                <BodyBox songsLists={ songsList } />
                <PlayerBox />
                <Player 
                    data={ contextData.playerSource } 
                    adress = {contextData.adress}
                    songs = { songsList }
                />
            </Context.Provider>
        </>
    );
}

export default App;
