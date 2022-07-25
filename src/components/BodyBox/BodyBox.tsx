import React from 'react';
import SongsData from '../SongsData/SongsData';
import SongsBox from '../SongsBox/SongsBox';
import './body-box-style.css';

type props = {
    songsList: {
        name: string,
        link: string,
        id:number,
    }[]
}

const BodyBox = ({ songsList }:props) => {
    return(
        <div className='bodyBox'>
            <SongsData count={ songsList.length } />
            <hr />
            <SongsBox songs={ songsList } />
        </div>
    )
}

export default BodyBox;
