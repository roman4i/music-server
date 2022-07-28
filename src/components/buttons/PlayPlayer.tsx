import React, { useContext, useState } from "react";
import Context from "../../store/context";
import playPict from "../../icons/play.png";
import pausePict from "../../icons/pause.png";
import "./buttons-style.css";

const PlayPlayer = () => {
    const globals = useContext(Context);
    let playerState:any;
    if(globals !== null){playerState = {...globals.playerState}}

    const changePlaying = () => {
        const player: any = document.getElementById('player');

        playerState.setPlaying((old: any) => !old);
        playerState.playing ? player.pause() : player.play();
    }

    return(
        <img className='playBtn' src={playerState.playing ? pausePict : playPict} alt="Play" onClick={changePlaying} />
    )
}

export default PlayPlayer;
