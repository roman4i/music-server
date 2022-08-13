import React, { ChangeEvent, useState } from 'react';

import './buttons-style.css';
import volumePicture from '../../icons/sound.png';
import playerAct from '../../api/player-api';

// icon author - Bingge Liu
const VolumeButton = () => {
  const volHide = {
    visibility: 'hidden'
  }

  const volShow = {
    visibility: 'visible'
  }
  
  const [showVol, setShowVol] = useState(false);
  const [volStyle, setVolStyle] = useState<any>(volHide);
  
  const volumeShowing = () => {
    setShowVol(old => !old);
    !showVol ? setVolStyle(volShow) : setVolStyle(volHide);
  }

  const changeVol = (event: React.ChangeEvent<HTMLInputElement>) => {
    playerAct.setVolume(event.target.value);
  }

  return(
    <div className='volumeContainer' >
      <input 
        className='volumeSlider' 
        type="range" 
        min='0' max='1' step='0.1' 
        style={volStyle} 
        onChange={changeVol}
      />
      <img 
        className='playerBtn' 
        src={volumePicture} 
        alt="Volume" 
        onClick={volumeShowing} 
      />
    </div>
  )
}

export default VolumeButton;