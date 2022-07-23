import React from 'react';
import PlayButton from '../buttons/PlayButton/PlayButton';
import './song-box-style.css';

const SongBox = () => {
    return(
        <div className='songBox'>
            <PlayButton /> <div className='songNumber'>1</div> <div className='songName'>Song name</div> <div>--:--</div>
        </div>
    )
}

export default SongBox;
