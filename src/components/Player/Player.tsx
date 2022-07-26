import React, { useEffect } from "react";
import { plData, songsList } from "../../store/types";

type data = {
    playerData: plData;
    setPlayerData: React.Dispatch<React.SetStateAction<plData>>;
}

type props = {
    data: data, 
    songs?:songsList, 
    playing:boolean
}

const Player = ({data, playing}:props) => {

    useEffect(() => {
        const player:any = document.getElementById('player');
        if(playing) {
            player.play()
        } else {
            player.pause()
        }
    }, [playing])

    return(
        <audio 
            id="player" 
            src={data.playerData.src} 
            controls={false} 
            autoPlay={false}
        ></audio>
    )
}

export default Player;
