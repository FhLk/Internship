const fetchURL = "https://free-to-play-games-database.p.rapidapi.com/api"
export const getGameList = async () => {
    const res = await fetch(`${fetchURL}/games`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    if (res.status === 200) {
        return await res.json()
    }
    return []
}

export const getGame = async (id) => {
    const res = await fetch(`${fetchURL}/game?id=${id}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    if (res.status === 200) {
        return await res.json()
    }
    return {}
}