import playerAct from "../../api/player-api";
import { songsList } from "../../store/types";

const prevSong = (songsList: songsList, currId: string, addr: string) => {
  const songsCount = songsList.length;
  let currentPos: number = 0;
  songsList.forEach((val, ind) => {
    if(val._id === currId) currentPos = ind;
  });
  let newPos: number = 0;
  if(currentPos !== 0) newPos = currentPos - 1;
  if(currentPos === 0) newPos = songsCount - 1;
  playerAct.setSrc(addr + '/songs/getSong/' + songsList[newPos]._id);
  playerAct.play();

  return newPos;
}

export default prevSong;
