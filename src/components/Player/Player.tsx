import React, { useEffect } from "react";
import { plData } from "../../store/types";

type data = {
    playerData: plData;
    setPlayerData: React.Dispatch<React.SetStateAction<plData>>;
}

type props = {
    data: data, 
    songs?: any, 
    adress: string,
}

const Player = ({ data, adress, songs }: props) => {

    return(
        <audio 
            id="player" 
            src={''} 
            controls={false} 
            autoPlay={false}
        ></audio>
    )
}

export default Player;
