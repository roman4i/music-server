import React, { useEffect } from 'react';

import './buttons-style.css';
import mutePicture from '../../icons/mute.png';

// icon author - Bingge Liu
const MuteButton = () => {
    const onMute = () => {
    }

    return(
        <img className='playerBtn' src={mutePicture} alt="Play" onClick={onMute} />
    )
}

export default MuteButton;