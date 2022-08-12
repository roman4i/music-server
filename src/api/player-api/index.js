const playerItem = () => document.getElementById('player');

const play = () => {
  playerItem().play();
}

const setSrc = (src) => {
  playerItem().src = src;
}

const pause = () => {
  playerItem().pause();
}

const src = () => {
  return playerItem().src;
}

const setMute = (state) => {
  playerItem().muted = state;
}

const setVolume = (val) => {
  playerItem().volume = val;
}

const currTime = () => {
  return playerItem().currentTime;
}

const seek = (val) => {
  playerItem().fastSeek(val);
}

const playerAct = {
  play,
  setSrc,
  pause,
  src,
  setMute,
  setVolume,
  currTime,
  seek,
}

export default playerAct;
