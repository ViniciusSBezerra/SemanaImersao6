import axios from 'axios'


const connectionApi = axios.create({
    baseURL: 'http://192.168.1.4:3000'
})
export default connectionApi;