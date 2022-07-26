import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Head from '../Head/Head';
import Context from '../../store/context';
import { plData, songsList } from '../../store/types';
import serverAdrrList from '../../store/server-adress';
import { getSongsList } from '../../api/songs';
import UploadPage from '../../pages/UploadPage/UploadPage';
import MainPage from '../../pages/MainPage/MainPage';
import SongsInfo from '../../pages/SongsInfo/SongsInfo';

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
    adress: serverAdrrList.local,
  }

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
            <Route path='songs-list' element={ <SongsInfo adress={ contextData.adress } /> } />
          </Routes>
          </BrowserRouter>
      </Context.Provider>
    </>
  );
}

export default App;
