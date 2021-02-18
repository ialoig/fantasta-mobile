
import { Alert } from 'react-native'
import I18n from 'i18n-js'
import axios from 'axios'

import { Token } from './server'
import { User } from './user'
import { Leagues } from './leagues'
import { Storage } from './storage'

const Authenticate = async () =>
{
    try
    {
        console.log("POST /auth/token");
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
        console.log("PUT /auth/login - email=" +email);
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
        console.log("POST /auth/register - email=" +email);
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
    console.log("POST /auth/update - email=" +email+ ", username="+username);
    await axios({
        url: "/auth/update",
        method: "POST",
        data: {email, username},
    })
    .then( async (res) => {
        //checking if result has a data
        if (res.data) {
            saveUser( res.data );
            //update header authorization cause user parameters has changed
            if (email) {
                let auth_token = await Storage.Get( 'token' )
                if ( auth_token ) {
                    axios.defaults.headers.common['Authorization'] = auth_token || ''
                }
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
        console.log("[saveUser] - user saved.")
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