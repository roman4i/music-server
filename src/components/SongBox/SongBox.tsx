import React from 'react';
import PlayButton from '../buttons/PlayButton/PlayButton';
import './song-box-style.css';

type props = {
    songName: string,
    link: string,
    id: number,
}

const SongBox = (props:props) => {
    const { songName, link, id } = props;
    return(
        <div className='songBox'>
            <PlayButton />
            <div className='songNumber'>{id}</div>
            <div className='songName'>{songName}</div>
            <div>--:--</div>
        </div>
    )
}

export default SongBox;
