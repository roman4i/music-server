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
    const setPlaying: any = globals?.playerState.setPlaying;

    const onNext = () => {
        setPlaying(false);
        if(id === songsCount - 1) {
            
            setId((old: any) => {
                return{
                    ...old,
                    id: 0,
                    src: globals?.adress + '/getSong/0',
                }
            });
        } else {
            setId((old: any) => {
                return{
                    ...old,
                    id: id + 1,
                    src: globals?.adress + '/getSong/' + (id+1),
                }
            });
        }
        
        setTimeout(() => setPlaying(true), 1000)
    }

    return(
        <img className="playerBtn" src={nextIcon} alt="Next" onClick={onNext} />
    )
}

export default NextButton;
