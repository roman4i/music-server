import React, { useState } from 'react';
import { deleteSong, getSongsList } from '../../../../api/songs';
import { songsList } from '../../../../store/types';

interface ISongLineProps {
  name: string,
  id: string,
  address: string,
  setSongs: React.Dispatch<React.SetStateAction<songsList>>,
}

const defStatus = {
  backgroundColor: 'white',
}

const waitingStatus = {
  backgroundColor: 'wheat',
}

const warningStatus = {
  backgroundColor: 'red',
}

const SongLine = ({ name, id, address, setSongs }: ISongLineProps) => {
  const [status, setStatus] = useState(defStatus);

  const onDelete = async () => {
    setStatus(waitingStatus);

    const result = await deleteSong(address, id);

    result === 'error' ? setStatus(warningStatus) : setStatus(defStatus);

    if(result === 'ok') {
      const songs = await getSongsList(address);
      setSongs(songs);
    }
  }

  return(
    <div className='uploadedSong' style={ status }>
      <div>{ name }</div>
      <input type="button" value="Delete" onClick={onDelete} />
    </div>
  );
}

export default SongLine;
