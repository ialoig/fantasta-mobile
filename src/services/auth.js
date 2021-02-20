
import { Alert } from 'react-native'
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
    console.log("POST /auth/update - email=" +email+ ", username="+username);
    try {

        let response = await axios({
            url: "/auth/update",
            method: "PUT",
            data: {email, username},
        })

        saveUser( response )
                
        return Promise.resolve()
    } catch (error) {
        handleError(error)
        return Promise.reject()
    }
}


const deleteAccount = async (password) => {
    console.log("DELETE /auth/deleteAccount");
    try {
        await axios({
            url: "/auth/deleteAccount",
            method: "DELETE",
            data: { password }
        })
        User.remove();
        Token.remove();

        return Promise.resolve()
    } catch (error) {
        return Promise.reject(error);
    }
}

export const Auth = {
    Authenticate,
    Login,
    Register,
    update,
    deleteAccount
}

const saveUser = ( response ) =>
{
    console.log("[saveUser] - " + response)

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
        info.message,
        [{ text: "OK" }],
        { cancelable: false }
    )
}