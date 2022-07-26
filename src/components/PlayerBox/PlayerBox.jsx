import React, { useContext, useEffect, useState } from 'react';
import { PlayPlayer, MuteButton, VolumeButton } from '../buttons';
import Context from '../../store/context';

import "./player-box-style.css";

const PlayerBox = () => {
    const globals = useContext(Context);
    const songsList = globals.songsList;
    const playerData = globals.playerSource.playerData

    const [playerSongName, setPlayerSongName] = useState("Song name");
    const [songDuration, setSongDuration] = useState(playerData.time)

    useEffect(() => {
        let songName = 'Song name';
        songsList.forEach(val => {
            if(playerData.id === val.id) songName = val.name
        });
        const fakePlayer = new Audio(playerData.src);
        fakePlayer.onloadedmetadata = () => {
            const rawTime = Math.floor(fakePlayer.duration);
            setSongDuration(Math.floor(rawTime/60)+':'+Math.floor(rawTime%60))
        };
        setPlayerSongName(songName);
    }, [playerData]);

    return(
        <div className='playerBox'>
            <div className='playerHead'>
                <div>{playerSongName}</div> <div>{songDuration}</div>
            </div>
            <div className='playerControls'>
                <PlayPlayer />
                <MuteButton />
                <VolumeButton />
            </div>
        </div>
    )
}

export default PlayerBox;
