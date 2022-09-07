import React, { useState } from 'react';
import { deleteSong, getSongsList, updateSong } from '../../../../api/songs';
import { songsList } from '../../../../store/types';
import './SongLine.style.css';

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
  const [editing, setEditing] = useState(false);
  const [songName, setSongName] = useState(name);
  const [editingName, setEditingName] = useState(name); 

  const onDelete = async () => {
    setStatus(waitingStatus);

    const result = await deleteSong(address, id);

    result === 'error' ? setStatus(warningStatus) : setStatus(defStatus);

    if(result === 'ok') {
      const songs = await getSongsList(address);
      setSongs(songs);
    }
  }

  const onEdit = async ()  => {
    if (editing && (editingName !== songName)) {
      setStatus(waitingStatus);
      const result  = await  updateSong(address, editingName, id);
      if (result !== 'fail') {
        setSongName(result.name);
        setStatus(defStatus);
      } else {
        setEditingName(songName);
        setStatus(warningStatus);
      }
    }
    setEditing(old => !old);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const cancelEditing = () => {
    setEditing(false);
    setEditingName(songName);
  };

  return(
    <div className='uploadedSong' style={ status }>
      {
        editing
        ? <input type="text" className='songNameInput' value={ editingName } onChange={ onChangeName } />
        : <div>{ songName }</div>
      }
      <div>
        <input type="button" value={ editing ? 'Save' : 'Edit' } onClick={ onEdit } />
        {editing && <input type="button" value="Cancel" onClick={ cancelEditing } />}
        <input type="button" value="Delete" onClick={ onDelete } />
      </div>
    </div>
  );
}

export default SongLine;
