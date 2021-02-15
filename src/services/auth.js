
import { Alert } from 'react-native'
import I18n from 'i18n-js'
import axios from 'axios'

import { Token } from './server'
import { User } from './user'
import { Leagues } from './leagues'

const Authenticate = async () =>
{
    try
    {
        let res = await axios.post('/auth/token', {}, {})
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


const update = async (id, email, username) => {
    let res = await axios({
        url: "/auth/update",
        method: "POST",
        data: {id, email, username},
    })
    .then( response => {
        //checking if result has a data
        console.log("[update] response.data=" +JSON.stringify(response.data))
        if (response.data) {
            let { data } = response.data || {}
            let user = {
                email: data.email,
                username: data.name
            }
            console.log("user=" +user.email)
            console.log("username=" +user.username)
            //setting email changed to global User
            if (user.email) {
                User.setEmail(user.email)
            }            
            //setting name changed to global User
            if (user.username) {
                User.setUsername(user.username)
            }
        }
        return Promise.resolve()
    })
    .catch( (error) => {
        handleError(error);
        return Promise.reject();
    })
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
        User.Set( user.email, user._id, user.name)

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