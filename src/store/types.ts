type plData = {
    src: string,
    id: string,
    playing: boolean,
}

type songsList = {
    name: string,
    src: string,
    _id: string,
    duration: number,
}[]

type contextData = {
    playerSource: {
        playerData: plData,
        setPlayerData: React.Dispatch<React.SetStateAction<plData>>
    },
    songsList: songsList,
    adress: string,
}

export type { plData, contextData, songsList };