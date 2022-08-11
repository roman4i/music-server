const player = document.getElementById('player');

const play = () => {
  player.play();
}

const setSrc = (src) => {
  player.src = src;
}

const pause = () => {
  player.pause();
}

const playerAct = {
  play,
  setSrc,
  pause,
}

export default playerAct;
