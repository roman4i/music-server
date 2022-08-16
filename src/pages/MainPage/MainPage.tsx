import { useEffect } from "react";
import { getSongsList } from "../../api/songs";
import BodyBox from "../../components/BodyBox/BodyBox";
import Player from "../../components/Player/Player";
import PlayerBox from "../../components/PlayerBox/PlayerBox";
import { songsList } from "../../store/types";

interface IMainPageProps {
  songsData: {
    songsList: songsList,
    setSongsList: React.Dispatch<React.SetStateAction<songsList>>,
  },
  adress: string,
}

const MainPage = ({songsData, adress}: IMainPageProps) => {

  useEffect(() => {
    getSongsList(adress)
      .then(result => songsData.setSongsList(result));
  }, []);

  return(
    <>
      <BodyBox songsLists={songsData.songsList} />
      <PlayerBox />
      <Player />
    </>
  );
}

export default MainPage;
