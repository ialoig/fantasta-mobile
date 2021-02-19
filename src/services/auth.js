
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
        let res = await axios.post('/auth/register', { email, password }, {})
        saveUser( res.data )

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
        let res = await axios.put('/auth/login', { email, password }, {})
        saveUser( res.data )

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
        let res = await axios.put('/auth/token', {}, {})
        saveUser( res.data )

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
        let res = await axios.put( '/auth/update', {email, username}, {})
        saveUser( res.data )
                
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

const saveUser = ( res ) =>
{
    if ( res.ok && res.data )
    {
        let data = res.data || {}

        let token = data.token || ''
        Token.Set( token )

        let user = data.user || {}
        
        User.Set( user )

        let leagues = user.leagues || []
        Leagues.Set( leagues )
    }
}

const handleError = ( err ) =>
{
    console.log("[handleError] - " + err)

    let info = err.response && err.response.data && err.response.data.info || {}
    Alert.alert(
        I18n.translate( info.title ),
        I18n.translate( info.subTitle ),
        [{
            text: "OK",
            onPress: () => console.log("Dismiss Popup")
        }],
        { cancelable: false }
    )
}