
import { Alert } from 'react-native'
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
        let response = await axios.post('/league/create', settings, {})
        
        LEAGUES = response.user.leagues || []
        Auction.Init( response.league, response.team )
        
        return Promise.resolve()
    }
    catch (error)
    {
        handleError(error)
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
            handleError(error)
            return Promise.reject(error)
        }
    }
}

export const Leagues = {
    Set,
    Get,
    Create,
    Join
}

const handleError = ( error ) =>
{
    console.log("[handleError] - ", error)

    let info = error && error.info || {}
    Alert.alert(
        info.title,
        info.message,
        [{ text: "OK" }],
        { cancelable: false }
    )
}