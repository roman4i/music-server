import React, { useEffect } from "react";
import { plData, songsList } from "../../store/types";

type data = {
    playerData: plData;
    setPlayerData: React.Dispatch<React.SetStateAction<plData>>;
}

type props = {
    data: data, 
    songs?: songsList, 
    playing: {
        playing: boolean,
        setPlaying: React.Dispatch<React.SetStateAction<boolean>>
    },
}

const Player = ({ data, playing }: props) => {

    // works not right will do it later
    // useEffect(() => {
    //     const player: any = document.getElementById('player');
    //     const currentId = data.playerData.id;
    //     player.onended = () => {
    //         playing.setPlaying(false);
    //         if(currentId === songs.length - 1) {
    //             data.setPlayerData(old => {
    //                 return{
    //                     ...old,
    //                     id: 0,
    //                     src: adress + '/getSong/0' ,
    //                 }
    //             })
    //         } else {
    //             data.setPlayerData(old => {
    //                 return{
    //                     ...old,
    //                     id: old.id + 1,
    //                     src: adress + '/getSong/' + (old.id + 1) ,
    //                 }
    //             })
    //         }
    //         setInterval(() => {
    //             playing.setPlaying(true)
    //         }, 1000);
    //     }
    // }, [])

    // useEffect(() => {
    //     const player: any = document.getElementById('player');
    //     if(playing.playing) {
    //         player.play()
    //     } else {
    //         player.pause()
    //     }
    // }, [playing.playing])

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
