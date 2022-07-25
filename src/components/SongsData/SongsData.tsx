import React from 'react';
import './songs-data-style.css';

const SongsData = ({ count }:{ count: number}) => {
    return(
        <div className='songsDataBox'>
            There { count > 1 ? 'are' : 'is' } { count } songs on your server. Enjoy
        </div>
    )
}

export default SongsData;
