
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
        console.log("calling auth/token")
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
        console.log("[Login] - email=" +email);
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


const update = async (email, username) => {
    await axios({
        url: "/auth/update",
        method: "POST",
        data: {email, username},
    })
    .then( res => {
        //checking if result has a data
        console.log("[update] res.data=" +JSON.stringify(res.data))
        if (res.data) {
            saveUser( res.data )
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

        console.log("save user ...");
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
    console.log("[handleError] - " + err)

    let info = err.info || {}
    Alert.alert(
        //TODO: add translation for any error
        //I18n.translate( info.title ),
        //I18n.translate( info.subTitle ),
        err.name,
        err.message,
        [{
            text: "OK",
            onPress: () => console.log("Dismiss Popup")
        }],
        { cancelable: false }
      )
}