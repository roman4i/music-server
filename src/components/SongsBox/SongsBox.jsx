import React from 'react';
import './songs-box-style.css';
import SongBox from '../SongBox/SongBox';

const SongsBox = () => {
    return(
        <div className='songsBox'>
            <SongBox />
            <SongBox />
        </div>
    )
}

export default SongsBox;
