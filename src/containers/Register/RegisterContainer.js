
import React from "react"
import { Actions } from "react-native-router-flux"
import Validator from 'validator'

import { Auth } from "../../services"
import { PASSWORD_OPT } from '../../constants/constants'

import Register from "./Register"

const emailId = 'email'
const passwordId = 'password'
const repeatPasswordId = 'repeatPassword'

export class RegisterContainer extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor (props) {
        super(props)

        this.state = {
            [emailId]: '',
            [passwordId]: '',
            [repeatPasswordId]: '',
            showError: false
        }
    }

    onChange ( id, value, valid ) {
        this.setState({
            [id]: value
        })
    }

    async register () {

        const email = this.state[emailId] || ''
        const pw1 = this.state[passwordId] || ''
        const pw2 = this.state[repeatPasswordId] || ''

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

                Actions.StartPage()
            }
            catch (error)
            {
                
            }
        }
    }
    
    render() {
        return (
            <Register
                emailId={emailId}
                passwordId={passwordId}
                repeatPasswordId={repeatPasswordId}
                password={this.state[passwordId]}
                showError={this.state.showError}
                onChange={this.onChange.bind(this)}
                Register={this.register.bind(this)}
                Login={()=> Actions.pop()}
            />
        )
    }
}
