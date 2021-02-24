import axios from 'axios'

import { Auction } from './auction'
import { Error } from './error'

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
        let response = await axios.post('/league/create', settings, {})
        
        LEAGUES = response.user.leagues || []
        Auction.Init( response.league, response.team )

        return Promise.resolve()
    }
    catch (error)
    {
        Error.handleError(error, true)
        return Promise.reject(error)
    }
}

const Join = async ( id='', name='', password='', teamname='' ) =>
{
    if ( id || name && password && teamname )
    {
        try
        {
            let data = {
                id,
                name,
                password,
                teamname
            }

            let response = await axios.put('/league/join', data, {})
            LEAGUES = response.user.leagues || []
            Auction.Init( response.league, response.team )
            return Promise.resolve()
        }
        catch (error)
        {
            Error.handleError(error, true)
            return Promise.reject(error)
        }
    }
    else{
        let error = `Join function called with wrong parameters: id=${id}, name=${name}, password=${password}, teamname=${teamname}`
        Error.handleError(error, true)
        return Promise.reject(error)
    }
}

export const Leagues = {
    Set,
    Get,
    Create,
    Join
}
