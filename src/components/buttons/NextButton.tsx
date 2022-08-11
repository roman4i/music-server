import React, { useContext } from "react";
import nextIcon from "../../icons/next.png";
import Context from "../../store/context";
import "./buttons-style.css";

const NextButton = () => {
    const globals = useContext(Context);
    let id:any;
    if(globals !== null) {id = globals?.playerSource.playerData.id}
    const songsCount: any = globals?.songsList.length;
    let setId: any;
    if(globals !== null) {setId = globals?.playerSource.setPlayerData}
    // const setPlaying: any = globals?.playerSource.setPlaying;

    const onNext = () => {
        
    }

    return(
        <img className="playerBtn" src={nextIcon} alt="Next" onClick={onNext} />
    )
}

export default NextButton;
