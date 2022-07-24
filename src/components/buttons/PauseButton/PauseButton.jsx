import React from "react";

import '../buttons-style.css';
import playPicture from '../../../icons/pause.png';

// icon author - Bingge Liu
const PauseButton = () => {
    return(
        <img className='pauseBtn' src={playPicture} alt="Play" />
    )
}

export default PauseButton;