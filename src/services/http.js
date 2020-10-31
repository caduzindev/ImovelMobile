import axios from 'axios'

const http = axios.create({
    baseURL:'http://192.168.1.105:8000/',
    header:{
        'Content-Type':'application/json'
    }
})

export default http;