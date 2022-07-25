import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import BodyBox from '../BodyBox/BodyBox';
import PlayerBox from '../PlayerBox/PlayerBox';

const synthData = [{"name":"Something too long for mobile display","link":"Alesso - Falling","id":0},{"name":"Kokab - Got U (Ready or Not)","link":"Kokab - Got U (Ready or Not).mp3","id":1},{"name":"Vacuum - I Breathe","link":"Vacuum - I Breathe.mp3","id":2}]

function App() {
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/getMusicList')
      .then(response => response.json())
      .then(result => setSongsList(result));
  }, []);

    return (
        <>
            <Head />
            <BodyBox songsList={ songsList } />
            <PlayerBox />
        </>
    );
}

export default App;
