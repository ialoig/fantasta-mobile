
import { Alert } from 'react-native'
import I18n from 'i18n-js'
import axios from 'axios'

import { Token } from './server'
import { User } from './user'
import { Leagues } from './leagues'

const Authenticate = async () =>
{
    let res = {}

    try
    {
        res = await axios.post('/auth/token', {}, {})
        saveUser( res )

        return Promise.resolve(res)
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

const Login = async ( email, password ) =>
{
    let res = {}

    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try
    {
        res = await axios.put('/auth/login', formData, {})
        saveUser( res )

        return Promise.resolve(res)
    }
    catch (error)
    {
        handleError(error)
        return Promise.reject()
    }
}

const Register = async ( email, password ) =>
{
    let res = {}

    let formData = new FormData()
    formData.append('email', email)
    formData.append('password', password)

    try
    {
        res = await axios.post('/auth/register', formData, {})
        saveUser( res )

        return Promise.resolve(res)
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
    Register
}

const saveUser = ( res ) =>
{
    if ( res.ok && res.data )
    {
        let data = res.data || {}

        let token = data.token || ''
        Token.Set( token )

        let user = data.user || {}
        User.Set( user.email, user.id )

        let leagues = user.leagues || []
        Leagues.Set( leagues )

    }
}

const handleError = ( err ) =>
{
    console.log(err)

    let info = err.info || {}
    Alert.alert(
        I18n.translate( info.title ),
        I18n.translate( info.subTitle ),
        [{
            text: "OK",
            onPress: () => console.log("OK Pressed")
        }],
        { cancelable: false }
      )
}