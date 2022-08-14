import React from 'react';
import Menu from '../Menu/Menu';
import './style.css';

const Head = () => {
    return(
        <div className='headerBox'>
            <Menu />
            <div className='header'>Your music server!</div>
        </div>
    )
}

export default Head;
