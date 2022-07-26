import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import BodyBox from '../BodyBox/BodyBox';
import PlayerBox from '../PlayerBox/PlayerBox';
import Context from '../../store/context';
import Player from '../Player/Player';
import { plData } from '../../store/types';
import serverAdrrList from '../../store/server-adress';

const synthData = [{"name":"Something too long for mobile display","link":"Alesso - Falling","id":0},{"name":"Kokab - Got U (Ready or Not)","link":"Kokab - Got U (Ready or Not).mp3","id":1},{"name":"Vacuum - I Breathe","link":"Vacuum - I Breathe.mp3","id":2}]

function App() {
    const startData: plData = {
        src: '',
        id: 0,
        time: '--:--'
    } 

    const [songsList, setSongsList] = useState([]);
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
    songsList:songsList,
    adress: serverAdrrList.current
  }

  useEffect(() => {
    fetch(contextData.adress + '/getMusicList')
        .then(response => response.json())
        .then(result => {
            setSongsList(result);
                if(result.length>0) setPlayerData({
                    src: contextData.adress + '/getSong/0',
                    id:0,
                    time: '--:--'
                });
            }
        )
        .catch(err =>{
            if(err) console.log(err.message);
        })
  }, []);

    return (
        <>
            <Context.Provider value={contextData}>
                <Head />
                <BodyBox songsList={ songsList } />
                <PlayerBox />
                <Player data={ contextData.playerSource } playing={playing} />
            </Context.Provider>
        </>
    );
}

export default App;
