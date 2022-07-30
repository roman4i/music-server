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

    useEffect(() => {
        const player: any = document.getElementById('player');
        player.onended = () => {
            if(data.playerData.id === songs?.length - 1) {
                player.src = adress + '/getSong/0';
                data.setPlayerData({
                    src: adress + '/getSong/0',
                    id: 0,
                })
            } else {
                console.log(data.playerData.id);
                
                console.log(adress + '/getSong/' + (data.playerData.id + 1));
                player.src = adress + '/getSong/' + (data.playerData.id + 1);
                data.setPlayerData(old => {
                    return {
                        src: adress + '/getSong/' + (old.id + 1),
                        id: old.id + 1
                    }
                })
            }
            player.play();
        }
    }, [data.playerData]);

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
