import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from '../Head/Head';
import BodyBox from '../BodyBox/BodyBox';
import Context from '../../store/context';
import Player from '../Player/Player';
import { plData, songsList } from '../../store/types';
import serverAdrrList from '../../store/server-adress';
import { getSongsList } from '../../api/songs';
import UploadPage from '../../pages/UploadPage/UploadPage';
import MainPage from '../../pages/MainPage/MainPage';

function App() {
    const startData: plData = {
      src: '',
      id: '',
      playing: false,
    } 

    const [songsList, setSongsList] = useState<songsList>([]);
    const [playerData, setPlayerData] = useState<plData>(startData);

  const contextData = {
    playerSource: {
      playerData,
      setPlayerData,
    },
    songsList: songsList,
    adress: serverAdrrList.outer
  }

  // const main = (<>
  //   <BodyBox songsLists={ songsList } />
  //   <Player />
  // </>);

  useEffect(() => {
    getSongsList(contextData.adress)
      .then(result => setSongsList(result))
  }, []);

  return (
    <>
      <Context.Provider value={ contextData }>
        <BrowserRouter>
          <Head />
          <Routes>
            <Route path='/' 
              element={
                <MainPage adress={contextData.adress} songsData={{songsList, setSongsList}} />
              } 
            />
            <Route path='upload' element={ <UploadPage source={contextData.adress} /> } />
          </Routes>
          </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
