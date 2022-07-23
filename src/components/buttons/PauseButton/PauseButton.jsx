import React from "react";

import './pause-button-style.css';
import playPicture from '../../../icons/pause.png';

// icon author - Bingge Liu
const PauseButton = () => {
    return(
        <img className='playBtn' src={playPicture} alt="Play" />
    )
}

export default PauseButton;