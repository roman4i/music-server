import React from 'react';
import { PlayButton, PauseButton, MuteButton, VolumeButton } from '../buttons';

import "./player-box-style.css";

const PlayerBox = () => {
    return(
        <div className='playerBox'>
            <div className='playerHead'>
                <div>Song name</div> <div>00:00</div>
            </div>
            <div className='playerControls'>
                <PlayButton />
                <PauseButton />
                <MuteButton />
                <VolumeButton />
            </div>
        </div>
    )
}

export default PlayerBox;
