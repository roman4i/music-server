import React from 'react';
import SongsData from '../SongsData/SongsData';
import SongsBox from '../SongsBox/SongsBox';
import { songsList } from '../../store/types';
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
        </div>
    )
}

export default BodyBox;
