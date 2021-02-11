
import axios from 'axios'

let LEAGUES = []

const Set = ( leagues ) =>
{
    LEAGUES = leagues || []
}

const Get = () =>
{
    return LEAGUES
}

const Create = async ( data ) =>
{
    try
    {
        let res = await axios.post('/league/create', data, {})

        console.log(res.data.data)
        
        return Promise.resolve()
    }
    catch (error)
    {
        return Promise.reject()
    }
}

export const Leagues = {
    Set,
    Get,
    Create
}