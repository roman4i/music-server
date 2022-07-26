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
        playerState.setPlaying((old: any) => !old);
    }

    return(
        <img className='playBtn' src={playerState.playing ? pausePict : playPict} alt="Play" onClick={changePlaying} />
    )
}

export default PlayPlayer;
