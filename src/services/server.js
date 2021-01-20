
import { Storage } from './storage'
import axios from 'axios'

const temp_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJwYXNzd29yZCI6InBhc3N3b3JkIiwiaWF0IjoxNjEwNzk0OTExLCJleHAiOjE2NDIzMzA5MTF9.OkwSR_v-7Awi0BRCUdL0cv8Ry4iQcU4P7kdl4nAacJU"

const SERVER_URL = 'http://localhost:3000/fantasta'
let AUTH_TOKEN = ''

const Set = ( tok ) =>
{
    AUTH_TOKEN = tok || ''

    Storage.Set( 'token', AUTH_TOKEN )
}

const Get = () =>
{
    return AUTH_TOKEN
}

const Init = async () =>
{
    AUTH_TOKEN = await Storage.Get( 'token' )

    AUTH_TOKEN = AUTH_TOKEN || ''

    axios.defaults.baseURL = SERVER_URL
    if ( AUTH_TOKEN )
    {
        axios.defaults.headers.common['Authorization'] = AUTH_TOKEN || ''
    }
    axios.defaults.headers.common['Accept'] = 'application/json'
    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:19006'
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, Origin, X-Requested-With, Access-Control-Allow-Origin, access-control-allow-credentials'
    axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, PUT, POST'
    axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true

    return Promise.resolve()
}

export const Server = {
    Init
}

export const Token = {
    Get,
    Set
}