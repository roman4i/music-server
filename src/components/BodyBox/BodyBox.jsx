import React from 'react';
import SongsData from '../SongsData/SongsData';
import SongsBox from '../SongsBox/SongsBox';
import './body-box-style.css';

const BodyBox = () => {
    return(
        <div className='bodyBox'>
            <SongsData />
            <hr />
            <SongsBox />
        </div>
    )
}

export default BodyBox;
