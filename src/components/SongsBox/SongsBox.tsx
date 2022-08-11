import React from 'react';
import './songs-box-style.css';
import SongBox from '../SongBox/SongBox';
import { songsList } from '../../store/types';

type props = {
    songs: songsList,
}

const SongsBox = ({ songs }: props) => {
    let songsArray:JSX.Element[]|string = [];
    if(songs.length > 0) {
        songsArray = songs.map((val, ind) => {
            return(
                <SongBox songName={val.name} index={ind} key={ind} duration={val.duration} />
            )
        })
    } else {
        songsArray = 'No music to display'
    }

    return(
        <div className='songsBox'>
            { songsArray }
        </div>
    )
}

export default SongsBox;
