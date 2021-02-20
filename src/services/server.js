
import axios from 'axios'

import { Storage } from './storage'

const URLS = {
    local: 'http://localhost:3000/fantasta',
    lan_inkubo: 'http://192.168.1.196:3000/fantasta',
    lan_pippo: 'http://192.168.0.96:3000/fantasta',
    lan_gl: 'http://172.18.0.3:3000/fantasta'
}

const SERVER_URL = URLS.lan_gl

let AUTH_TOKEN = ''

const Set = ( tok ) =>
{
    AUTH_TOKEN = tok || ''
    console.log("\tstoring token ...")
    Storage.Set( 'token', AUTH_TOKEN )
}

const Get = () =>
{
    return AUTH_TOKEN
}

const remove = () => {
    AUTH_TOKEN = ""
    Storage.Set( 'token', AUTH_TOKEN )
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
    Set,
    remove
}