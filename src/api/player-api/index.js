const play = () => {
  const player = document.getElementById('player');
  player.play();
}

const setSrc = (src) => {
  const player = document.getElementById('player');
  player.src = src;
}

const pause = () => {
  const player = document.getElementById('player');
  player.pause();
}

const src = () => {
  const player = document.getElementById('player');
  return player.src;
}

const playerAct = {
  play,
  setSrc,
  pause,
  src,
}

export default playerAct;
