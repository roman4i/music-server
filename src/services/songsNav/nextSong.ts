import { songsList } from "../../store/types";
import playerAct from "../../api/player-api";

const nextSong = (songsList: songsList, currId: string, addr: string) => {
  const songsCount = songsList.length;
  let currentPos: number = 0;
  songsList.forEach((val, ind) => {
    if(val._id === currId) currentPos = ind;
  });
  let newPos: number = 0;
  if(currentPos !== songsCount - 1) newPos = currentPos + 1;
  if(currentPos === songsCount - 1) newPos = 0;
  playerAct.setSrc(addr + '/songs/getSong/' + songsList[newPos]._id);
  playerAct.play();

  return newPos;
}

export default nextSong;
