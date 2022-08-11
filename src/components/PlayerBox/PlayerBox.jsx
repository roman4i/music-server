import React, { useContext, useEffect, useState } from 'react';
import { PlayPlayer, MuteButton, VolumeButton, PrevButton, NextButton } from '../buttons';
import Context from '../../store/context';

import "./player-box-style.css";

const PlayerBox = () => {
    const globals = useContext(Context);
    const songsList = globals.songsList;
    const playerData = globals.playerSource.playerData

    const [playerSongName, setPlayerSongName] = useState("Song name");
    const [songDuration, setSongDuration] = useState(playerData.time)

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
