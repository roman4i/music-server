import React, { useContext } from "react";
import prevIcon from "../../icons/prev.png";
import { prevSong } from "../../services/songsNav";
import Context from "../../store/context";
import "./buttons-style.css";

const PrevButton = () => {
    const globals = useContext(Context);
    let id:string = globals.playerSource.playerData.id;
    let setId: any = globals.playerSource.setPlayerData;
    const setPlayerData = globals.playerSource.setPlayerData;

    const onPrev = () => {
        if(globals.playerSource.playerData.playing){
            const newPos = prevSong(globals.songsList, id, globals.adress);
            const newId = globals.songsList[newPos]._id;
            setPlayerData(old => ({...old, id: newId}));
        }
    }

    return(
        <img className="playerBtn" src={prevIcon} alt="Prev" onClick={onPrev} />
    )
}

export default PrevButton;
