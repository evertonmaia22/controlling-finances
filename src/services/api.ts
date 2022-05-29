import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://controlling-finances-web.vercel.app/',
})
