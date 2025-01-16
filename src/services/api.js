
import axios from 'axios'

//Base API: https://api.themoviedb.org/3/
//URL da API: /movie/now_playing?api_key=0b9d6cd8c6dba2ac7d233945d2debd44&language=pt-BR
//0b9d6cd8c6dba2ac7d233945d2debd44 - chave API filmes

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api

