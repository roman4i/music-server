import React, { useContext } from "react";
import nextIcon from "../../icons/next.png";
import { nextSong } from "../../services/songsNav";
import Context from "../../store/context";
import "./buttons-style.css";

const NextButton = () => {
  const globals = useContext(Context);
  const id = globals.playerSource.playerData.id;
  const setPlayerData = globals.playerSource.setPlayerData;

  const onNext = () => {
    if(globals.playerSource.playerData.playing){
      const newPos = nextSong(globals.songsList, id, globals.adress);
      const newId = globals.songsList[newPos]._id;
      setPlayerData(old => ({...old, id: newId}));
    }
  }

  return(
    <img className="playerBtn" src={nextIcon} alt="Next" onClick={onNext} />
  )
}

export default NextButton;
