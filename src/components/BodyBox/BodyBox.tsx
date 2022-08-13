import React from 'react';
import SongsData from '../SongsData/SongsData';
import SongsBox from '../SongsBox/SongsBox';
import { songsList } from '../../store/types';
import PlayerBox from '../PlayerBox/PlayerBox';
import './body-box-style.css';

type props = {
  songsLists: songsList,
}

const BodyBox = ({songsLists}:props) => {
  return(
    <div className='bodyBox'>
      <SongsData count={ songsLists.length } />
      <hr />
      <SongsBox songs={ songsLists } />
      <PlayerBox />
    </div>
  )
}

export default BodyBox;
