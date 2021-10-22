import axios from 'axios';

// URL FILMES  EM CARTAZ:
// https://api.themoviedb.org/3
///movie/now_playing?api_key=b3b3e0f4ff1231cc43a319b89372cc65&language=pt-BR&page=1


export const key = 'b3b3e0f4ff1231cc43a319b89372cc65'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;