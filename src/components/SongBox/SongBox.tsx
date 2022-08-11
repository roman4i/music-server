import React, { useState } from 'react';
import PlayButton from '../buttons/PlayButton/PlayButton';
import './song-box-style.css';

type props = {
    songName: string,
    index: number,
    duration: number,
}

const SongBox = (props: props) => {
    const { songName, index, duration } = props;

    const secDuration = duration % 60;
    const minutesDuration = 
        Math.trunc(duration / 60) + ':' + (secDuration < 10 ? '0' : '') + secDuration;

    return(
        <div className='songBox'>
            <PlayButton id={index} />
            <div className='songNumber'>{index}</div>
            <div className='songName'>{songName}</div>
            <div>{ minutesDuration }</div>
        </div>
    )
}

export default SongBox;
