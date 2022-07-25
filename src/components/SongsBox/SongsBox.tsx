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
    let songsArray:JSX.Element[]|string = [];
    if(songs.length > 0) {
        songsArray = songs.map((val, ind) => {
            return(
                <SongBox songName={val.name} link={val.link} id={val.id} key={ind} />
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
