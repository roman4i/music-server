import React from 'react';
import './songs-box-style.css';
import SongBox from '../SongBox/SongBox';

type props = {
    songs: {
        name: string,
        link: string,
        id:number,
    }[]
}

const SongsBox = ({ songs }:props) => {
    const songsArray = songs.map(val => {
        return(
            <SongBox songName={val.name} link={val.link} id={val.id} />
        )
    })

    return(
        <div className='songsBox'>
            { songsArray }
        </div>
    )
}

export default SongsBox;
