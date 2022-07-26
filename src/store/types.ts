type plData = {
    src: string,
    id: number,
    time: string,
}

type songsList = {
    name: string,
    link: string,
    id: number
}[]

type contextData = {
    playerSource: {
        playerData: plData,
        setPlayerData:React.Dispatch<React.SetStateAction<plData>>
    },
    playerState: {
        playing: boolean,
        setPlaying:React.Dispatch<React.SetStateAction<boolean>>
    },
    songsList:songsList
}

export type { plData, contextData, songsList };