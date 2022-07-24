import React from 'react';

import '../buttons-style.css';
import playPicture from '../../../icons/play.png';

// icon author - Bingge Liu
const PlayButton = () => {
    return(
        <img className='playBtn' src={playPicture} alt="Play" />
    )
}

export default PlayButton;
