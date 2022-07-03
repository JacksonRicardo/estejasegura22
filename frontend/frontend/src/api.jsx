import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/servicos/pessoa/'
    //baseURL: 'https://api.tvmaze.com/search/shows?q=star%wars'
});

export default api;