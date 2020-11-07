import axios from 'axios'
import { URL_SERVER } from '@env'

const http = axios.create({
    baseURL:`${URL_SERVER}`,
    header:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    }
})

export default http;