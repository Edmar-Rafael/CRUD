import axios from 'axios'

const api = axios.create({baseURL: 'https://dragonnodeapi.herokuapp.com'})

export const endpoints = {
   dragon: '/dragon/'
}

export default api