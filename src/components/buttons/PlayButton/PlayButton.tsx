import React, { useContext, useState } from 'react';
import Context from '../../../store/context';
import playerAct from '../../../api/player-api';

import '../buttons-style.css';
import playPicture from '../../../icons/play.png';
import pausePicture from '../../../icons/pause.png';

// icon author - Bingge Liu
const PlayButton = ({ id }: { id: string }) => {
  const globals = useContext(Context);
  let playerState: boolean|undefined = globals?.playerSource.playerData.playing;
  const currId = globals?.playerSource.playerData.id;

  const playImage = (id === currId) && playerState ? pausePicture : playPicture;
  
  const changePlaying = () => {
    if(!playerState) {
      playerAct.setSrc(globals?.adress + '/songs/getSong/' + id);
      playerAct.play();
      globals?.playerSource.setPlayerData(old => ({...old, playing: true, id: id}));
    } else {
      playerAct.pause();
      globals?.playerSource.setPlayerData(old => ({...old, playing: false}));
    }
  }
  
  return(
    <img 
      className='playBtn' 
      onClick={changePlaying}
      src={playImage}
      alt="Play" 
    />
  )
}

export default PlayButton;
