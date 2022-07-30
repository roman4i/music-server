type plData = {
    src: string,
    id: number,
}

type songsList = {
    name: string,
    link: string,
    id: number
}[]

type contextData = {
    playerSource: {
        playerData: plData,
        setPlayerData: React.Dispatch<React.SetStateAction<plData>>
    },
    playerState: {
        playing: boolean,
        setPlaying: React.Dispatch<React.SetStateAction<boolean>>
    },
    songsList: songsList,
    adress: string,
}

export type { plData, contextData, songsList };