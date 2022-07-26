import React, { useContext } from 'react';
import Context from '../../../store/context';

import '../buttons-style.css';
import playPicture from '../../../icons/play.png';
import pausePicture from '../../../icons/pause.png';

// icon author - Bingge Liu
const PlayButton = ({id}:{id: number}) => {
    const globals = useContext(Context);
    let playerState:any;
    if(globals !== null){playerState = {...globals.playerState}}
    let currId;
    if(globals !== null){currId = globals.playerSource.playerData.id}

    const changePlaying = () => {
        if(!playerState.playing) {
            if(playerState.playing !== null) {
                globals?.playerSource.setPlayerData((old) => {
                    return {
                        ...old,
                        src: 'http://192.168.1.155:3001/getSong/' + id,
                        id: id
                    }
                })
            }
        }
        playerState.setPlaying((old: any) => !old);
    }
    
    return(
        <img 
            className='playBtn' 
            onClick={changePlaying}
            src={playerState.playing && id === currId ? pausePicture : playPicture}  
            alt="Play" 
        />
    )
}

export default PlayButton;
