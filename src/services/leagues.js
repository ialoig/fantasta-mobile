
import axios from 'axios'

import { Auction } from './auction'

let LEAGUES = []

const Set = ( leagues ) =>
{
    LEAGUES = leagues || []
}

const Get = () =>
{
    return LEAGUES
}

const Create = async ( settings ) =>
{
    try
    {
        let res = await axios.post('/league/create', settings, {})
        let response = res.data && res.data.data || {}
        LEAGUES = response.user.leagues || []
        Auction.Init( response.league, response.team )
        
        return Promise.resolve()
    }
    catch (error)
    {
        return Promise.reject(info)
    }
}

const Join = async ( id ) =>
{
    try
    {
        let res = await axios.post('/league/join', {id}, {})
        let response = res.data && res.data.data || {}
        LEAGUES = response.user.leagues || []
        Auction.Init( response.league, response.team )
        
        return Promise.resolve()
    }
    catch (error)
    {
        return Promise.reject(info)
    }
}

export const Leagues = {
    Set,
    Get,
    Create,
    Join
}