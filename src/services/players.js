
import axios from 'axios'

import { Storage } from './storage'

let PLAYERS = {}
let VERSION = ''

const Set = ( players ) =>
{
    PLAYERS = players || []
}

const Get = () =>
{
    return PLAYERS
}

const Init = async () =>
{
    try
    {
        let players = await Storage.Get( 'players' )
        players = typeof(players) == 'string' ? JSON.parse(players) : players

        let version = players && players.version || 0

        let res = await axios.get(`/footballPlayers`, { params: { version } })

        let data = res && res.data && res.data.data || {}
        if ( data.updated )
        {
            PLAYERS = data.footballPlayers
            VERSION = data.version

            Storage.Set( 'players', JSON.stringify({ footballPlayers: data.footballPlayers, version: data.version }) )
        }
        else
        {
            PLAYERS = players.footballPlayers
            VERSION = version
        }

        return Promise.resolve()
    }
    catch (error)
    {
        console.log("[players init] - error: ", error)
        return Promise.reject(error)
    }
}

export const Players = {
    Set,
    Get,
    Init
}