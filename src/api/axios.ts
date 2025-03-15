import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5173',
})

instance.defaults.timeout = 2500

export default instance
