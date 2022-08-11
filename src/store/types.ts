type plData = {
    src: string,
    id: number,
    playing: boolean,
}

type songsList = {
    name: string,
    link: string,
    _id: number,
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