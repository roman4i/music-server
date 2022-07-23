import React from 'react';

import './buttons-style.css';
import mutePicture from '../../icons/mute.png';

// icon author - Bingge Liu
const MuteButton = () => {
    return(
        <img className='muteBtn' src={mutePicture} alt="Play" />
    )
}

export default MuteButton;