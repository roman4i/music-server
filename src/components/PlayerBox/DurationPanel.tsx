import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import playerAct from "../../api/player-api";
import toMinutes from "../../services/duration/toMinutes";

type props = {
  duration: number,
  playing: boolean,
}

const DurationPanel = ({ duration, playing }:props) => {
  const calcDuration = toMinutes(duration);
  const [currentSeeking, setCurrentSeeking] = useState('--:--');
  const [timeOuted, setTimeOuted] = useState(true);
  const [currSec, setCurrSec] = useState(0);

  const getTime = () => {
    const seconds = playerAct.currTime();
    const res = toMinutes(seconds);
    
    setCurrSec(Math.round(seconds));
    setCurrentSeeking(res);
    setTimeOuted(true)
  } 

  const seek = (element: React.ChangeEvent<HTMLInputElement>) => {
    playerAct.seek(element.target.value)
  }

  useEffect(() => {
    if(timeOuted && playing) {
      setTimeout(getTime, 500);
      setTimeOuted(false);
    }
  }, [playing, timeOuted])

  return(
    <div className="playerDuration">
      <div>{ currentSeeking }</div>
      <input type="range" max={ duration } value={ currSec } onChange={seek} />
      <div>{ duration !== 0 ? calcDuration : '--:--' }</div>
    </div>
  )
}

export default DurationPanel;
