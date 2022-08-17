import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../../icons/menu.png';

import './Menu.style.css';

const hiddenMenu = {
  visibility: 'hidden',
}

const visibleMenu = {
  visibility: 'visible',
}

const Menu = () => {
  const [visible, setVisible] = useState(hiddenMenu);

  const showSideMenu = () => {
    if(visible.visibility === 'hidden') {
      setVisible(visibleMenu)
    } else {
      setVisible(hiddenMenu)
    }
  }

  return(
    <div className='menu' >
      <img src={ menuIcon } alt="menu" onClick={showSideMenu} />
      <div className='sideMenuBox' style={ visible } >
        <Link to='/' >Main</Link>
        <Link to='/upload' >Upload</Link>
        <Link to='/songs-list'>Songs List</Link>
      </div>
    </div>
  );
}

export default Menu;
