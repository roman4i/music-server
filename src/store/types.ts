type plData = {
    src: string,
    id: number
}

type songsList = {
    name: string,
    link: string,
    id: number
}[]

type contextData = {
    playerSource: {
        playerData: {
            src: string,
            id: number
        },
        setPlayerData:React.Dispatch<React.SetStateAction<plData>>
    },
    playerState: {
        playing: boolean,
        setPlaying:React.Dispatch<React.SetStateAction<boolean>>
    },
    songsList:songsList
}

export type { plData, contextData, songsList };