import axios from "axios" // Faz a consulta na api

const api = axios.create({
    baseURL: 'http://localhost:8000/'
})

export default api
