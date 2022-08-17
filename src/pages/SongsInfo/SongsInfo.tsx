import React, { useEffect, useState } from 'react';
import { getSongsList } from '../../api/songs';
import { songsList } from '../../store/types';
import SongLine from './components/SongLine/SongLine';


const SongsInfo = ({ adress }: { adress: string }) => {
  const [songs, setSongs] = useState<JSX.Element[]>([]);
  const [songsList, setSongsList] = useState<songsList>([]);

  useEffect(() => {
    getSongsList(adress)
      .then(result => {
        setSongsList(result);
      });
  }, []);

  useEffect(() => {
    setSongs(songsList.map((val: any, ind) => 
      <SongLine 
      name={val.name} 
      id={val._id} 
      key={ind} 
      address={ adress } 
      setSongs={ setSongsList} />
    ));
  }, [songsList]);

  return(
    <div className='uploadPage'>
      <div className='uploadFilesList'>{ songs }</div>
    </div>
  );
}

export default SongsInfo;
