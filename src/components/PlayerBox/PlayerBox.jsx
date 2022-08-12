import React, { useContext, useEffect, useState } from 'react';
import { PlayPlayer, MuteButton, VolumeButton, PrevButton, NextButton } from '../buttons';
import Context from '../../store/context';

import "./player-box-style.css";
import { nextSong } from '../../services/songsNav';

const PlayerBox = () => {
  const globals = useContext(Context);
  const songsList = globals.songsList;
  const playerData = globals.playerSource.playerData

  const [playerSongName, setPlayerSongName] = useState("Song name");
  const [songDuration, setSongDuration] = useState('--:--');

  useEffect(() => {
    const player = document.getElementById('player');

    if(player !== null) {
      player.onended = () => {
        const newPos = nextSong(songsList, playerData.id, globals.adress)
        globals.playerSource.setPlayerData(old => ({...old, id: globals.songsList[newPos]._id}));
      }
    };
  }, [playerData.id]);

  return(
    <div className='playerBox'>
      <div className='playerHead'>
        <div>{playerSongName}</div> <div>{songDuration}</div>
      </div>
      <div className='playerControls'>
        <PrevButton />
        <PlayPlayer />
        <NextButton />
        <MuteButton />
        <VolumeButton />
      </div>
    </div>
  )
}

export default PlayerBox;
