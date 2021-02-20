
import { Alert } from 'react-native'
import I18n from 'i18n-js'
import axios from 'axios'

import { Token } from './server'
import { User } from './user'
import { Leagues } from './leagues'

const Register = async ( email, password ) =>
{
    try
    {
        let response = await axios.post('/auth/register', { email, password }, {})
        saveUser( response )

        return Promise.resolve()
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

const Login = async ( email, password ) =>
{
    try
    {
        let response = await axios.put('/auth/login', { email, password }, {})
        saveUser( response )

        return Promise.resolve()
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

const Authenticate = async () =>
{
    try
    {
        let response = await axios.put('/auth/token', {}, {})
        saveUser( response )

        return Promise.resolve()
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

const update = async (email, username) => {
    
    try
    {
        let response = await axios.put( '/auth/update', {email, username}, {})
        saveUser( response )
                
        return Promise.resolve()
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

export const Auth = {
    Authenticate,
    Login,
    Register,
    update
}

const saveUser = ( response ) =>
{
    console.log("[save USer] - " + response)

    let data = response || {}

    let token = data.token || ''
    Token.Set( token )

    let user = data.user || {}
    
    User.Set( user )

    let leagues = user.leagues || []
    Leagues.Set( leagues )
}

const handleError = ( error ) =>
{
    console.log("[handleError] - ", error)

    let info = error && error.info || {}
    Alert.alert(
        info.title,
        info.subTitle,
        [{ text: "OK" }],
        { cancelable: false }
    )
}