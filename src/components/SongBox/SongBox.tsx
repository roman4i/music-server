import React, { useContext, useState } from 'react';
import Context from '../../store/context';
import PlayButton from '../buttons/PlayButton/PlayButton';
import './song-box-style.css';

type props = {
    songName: string,
    link: string,
    id: number,
}

const SongBox = (props:props) => {
    const { songName, link, id } = props;

    const globals = useContext(Context);
    const [songDuration, setSongDuration] = useState('--:--');

    const adress = globals?.adress;

    const fakePlayer = new Audio(adress + '/getSong/' + id);
    fakePlayer.preload = 'metadata';
    fakePlayer.onloadedmetadata = () => {
        const rawTime = Math.floor(fakePlayer.duration);
        setSongDuration(Math.floor(rawTime/60)+':'+Math.floor(rawTime%60))
    };

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
