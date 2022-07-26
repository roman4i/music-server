import React from 'react';

import './buttons-style.css';
import volumePicture from '../../icons/sound.png';

// icon author - Bingge Liu
const VolumeButton = () => {
    return(
        <img className='playerBtn' src={volumePicture} alt="Volume" />
    )
}

export default VolumeButton;