import React, { useContext, useEffect, useState } from 'react';
import { PlayPlayer, MuteButton, VolumeButton, PrevButton, NextButton } from '../buttons';
import DurationPanel from './DurationPanel';
import Context from '../../store/context';

import "./player-box-style.css";
import { nextSong } from '../../services/songsNav';

const PlayerBox = () => {
  const globals = useContext(Context);
  const songsList = globals.songsList;
  const playerData = globals.playerSource.playerData

  let currSong;
  songsList.forEach(val => {
    if(val._id === playerData.id) currSong = val;
  })
  if(currSong === undefined) currSong = {
    name: 'Song name',
    duration: 0,
  }

  // auto next song
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
      <div className='playerSongName'>{ currSong.name }</div>
      <DurationPanel duration={currSong.duration} playing={ playerData.playing } />
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
