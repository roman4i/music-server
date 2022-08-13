import React, { useState } from 'react';

import './buttons-style.css';
import mutePicture from '../../icons/mute.png';
import playerAct from '../../api/player-api';

// icon author - Bingge Liu
const MuteButton = () => {
  const [muteState, setMuteState] = useState(false);
  const onMute = () => {
    playerAct.setMute(!muteState);
    setMuteState(old => !old);
  }

  return(
    <img className='playerBtn' src={mutePicture} alt="Play" onClick={onMute} />
  )
}

export default MuteButton;