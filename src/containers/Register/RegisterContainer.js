
import React from "react"
import { Actions } from "react-native-router-flux"
import Validator from 'validator'

import { Auth } from "../../services"
import { FIELDS_ID, PASSWORD_OPT } from '../../constants'

import Register from "./Register"

export class RegisterContainer extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            [FIELDS_ID.emailId]: '',
            [FIELDS_ID.passwordId]: '',
            [FIELDS_ID.repeatPasswordId]: '',
            showError: false
        }
    }

    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    async register () {

        const email = this.state[FIELDS_ID.emailId] || ''
        const pw1 = this.state[FIELDS_ID.passwordId] || ''
        const pw2 = this.state[FIELDS_ID.repeatPasswordId] || ''

        if ( !email || !Validator.isEmail(email) ) {
            this.setState({showError: true})
            return
        }

        if ( !pw1 || !Validator.isStrongPassword(pw1, PASSWORD_OPT) ) {
            this.setState({showError: true})
            return
        }

        if ( pw1!=pw2 ) {
            this.setState({showError: true})
            return
        }

        if ( email && pw1 && pw1==pw2 )
        {
            try
            {
                let res = await Auth.Register( email, pw1 )

                Actions.reset('GetStarted')
            }
            catch (error)
            {
                
            }
        }
    }
    
    render() {
        return (
            <Register
                emailId={FIELDS_ID.emailId}
                passwordId={FIELDS_ID.passwordId}
                repeatPasswordId={FIELDS_ID.repeatPasswordId}
                password={this.state[FIELDS_ID.passwordId]}
                showError={this.state.showError}
                onChange={this.onChange.bind(this)}
                Register={this.register.bind(this)}
                login={Actions.pop}
            />
        )
    }
}
