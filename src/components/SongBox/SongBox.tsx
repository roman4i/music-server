import React, { useState } from 'react';
import PlayButton from '../buttons/PlayButton/PlayButton';
import './song-box-style.css';

type props = {
    songName: string,
    id: number,
    duration: number,
}

const SongBox = (props: props) => {
    const { songName, id } = props;

    const [songDuration, setSongDuration] = useState('--:--');

    return(
        <div className='songBox'>
            <PlayButton id={id} />
            <div className='songNumber'>{id}</div>
            <div className='songName'>{songName}</div>
            <div>{songDuration}</div>
        </div>
    )
}

export default SongBox;
