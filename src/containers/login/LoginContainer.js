import React from "react";
import { Actions } from "react-native-router-flux";
import Validator from 'validator'

import { Auth } from "../../services"
import { PASSWORD_OPT } from '../../constants/constants'

import Login from "./Login";

const emailId = 'email'
const passwordId = 'password'

export class LoginContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {
            [emailId]: '',
            [passwordId]: '',
            showError: false
        }
    }

    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    async login () {

        const email = this.state[emailId] || ''
        const pw = this.state[passwordId] || ''

        if ( email && pw && Validator.isEmail(email) && Validator.isStrongPassword(pw, PASSWORD_OPT) )
        {
            try
            {
                let res = await Auth.Login( email, pw )

                Actions.reset('Home')
            }
            catch (error)
            {
                
            }
        }
        else
        {
            this.setState({showError: true})
        }
    }

    register () {
        Actions.Register()
    }

    forgotPassword () {
        console.log('forgot password')
    }
    
    render() {
        return (
            <Login
                emailId={emailId}
                passwordId={passwordId}
                showError={this.state.showError}
                onChange={this.onChange.bind(this)}
                Login={this.login.bind(this)}
                Register={this.register.bind(this)}
                ForgotPassword={this.forgotPassword.bind(this)}
            />
        )
    }
}
