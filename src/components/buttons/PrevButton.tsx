import React, { useContext } from "react";
import prevIcon from "../../icons/prev.png";
import Context from "../../store/context";
import "./buttons-style.css";

const PrevButton = () => {
    const globals = useContext(Context);
    let id:any;
    if(globals !== null) {id = globals?.playerSource.playerData.id}
    const songsCount: any = globals?.songsList.length;
    let setId: any;
    if(globals !== null) {setId = globals?.playerSource.setPlayerData}
    const setPlaying: any = globals?.playerState.setPlaying;

    const onPrev = () => {
        // setPlaying(false);
        const player: any = document.getElementById('player');

        if( id === 0) {
            player.src = globals?.adress + '/getSong/' + (songsCount - 1);
            setId((old: any) => {
                return{
                    ...old,
                    id: songsCount - 1,
                    src: globals?.adress + '/getSong/' + (songsCount - 1),
                }
            });
        } else {
            player.src = globals?.adress + '/getSong/' + (id - 1)
            setId((old:any) => {
                return{
                    ...old,
                    id: id - 1,
                    src: globals?.adress + '/getSong/' + (id - 1)
                }
            })
        }
        setTimeout(() => setPlaying(true), 1000)
        player.play();
    }

    return(
        <img className="playerBtn" src={prevIcon} alt="Prev" onClick={onPrev} />
    )
}

export default PrevButton;
