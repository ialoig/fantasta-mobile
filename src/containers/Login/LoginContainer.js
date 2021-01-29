
import React from "react"
import { Actions } from "react-native-router-flux"
import Validator from 'validator'

import { Auth } from "../../services"
import { FIELDS_ID, PASSWORD_OPT } from '../../constants'

import Login from "./Login"

export class LoginContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            [FIELDS_ID.emailId]: '',
            [FIELDS_ID.passwordId]: '',
            showError: false
        }
    }

    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    async login () {

        const email = this.state[FIELDS_ID.emailId] || ''
        const pw = this.state[FIELDS_ID.passwordId] || ''

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
                emailId={FIELDS_ID.emailId}
                passwordId={FIELDS_ID.passwordId}
                showError={this.state.showError}
                onChange={this.onChange.bind(this)}
                Login={this.login.bind(this)}
                Register={this.register.bind(this)}
                ForgotPassword={this.forgotPassword.bind(this)}
            />
        )
    }
}
