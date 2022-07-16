import axios from 'axios'

const api = axios.create({baseURL: 'https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'})

export const endpoints = {
   dragon: '/dragon/'
}

export default api