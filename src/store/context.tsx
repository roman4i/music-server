import { createContext, useContext } from "react";
import { contextData } from "./types";

const defs: contextData = {
  playerSource: {
    playerData: {
      src: '',
      id: '',
      playing: false,
    },
    setPlayerData: () => {},
  },
  songsList: [],
  adress: '',
}

const Context = createContext<contextData>(defs);

export default Context;