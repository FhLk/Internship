import axios from 'axios'
const fetchURL = "https://free-to-play-games-database.p.rapidapi.com/api"
export const getGameList = async () => {
    const res= await axios.get(`${fetchURL}/games`,{
        headers:{
            'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    if (res.status === 200) {
        return await res.data
    }
    return []
}

export const getGame = async (id) => {
    const res = await axios.get(`${fetchURL}/game?id=${id}`, {
        headers: {
            'x-rapidapi-key': '2a50aee9e6msh55cf8498c0e6c1ap1c932fjsn9403eb2b255d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    if (res.status === 200) {
        return await res.data
    }
    return {}
}