import React, { useContext, useState } from "react";
import Context from "../../store/context";
import playPict from "../../icons/play.png";
import pausePict from "../../icons/pause.png";
import { plData } from "../../store/types";
import playerAct from "../../api/player-api";
import "./buttons-style.css";

const PlayPlayer = () => {
  const globals = useContext(Context);
  const  playerState: plData|undefined = globals?.playerSource.playerData;

  const changePlaying = () => {
    if(!playerState?.playing) {
      if(playerAct.src().length !== 0) {
        playerAct.play();
        globals?.playerSource.setPlayerData(old => ({...old, playing: true}));
      }
    } else {
      playerAct.pause();
      globals?.playerSource.setPlayerData(old => ({...old, playing: false}));
    }
  }

  return(
    <img className='playBtn' src={playerState?.playing ? pausePict : playPict} alt="Play" onClick={changePlaying} />
  )
}

export default PlayPlayer;
