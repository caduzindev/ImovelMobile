import axios from 'axios'
import { URL_SERVER } from '@env'

const http = axios.create({
    baseURL:`${URL_SERVER}`,
    header:{
        'Content-Type':'application/json'
    }
})

export default http;