
import React from "react";
import { Actions } from "react-native-router-flux";

import Register from "./Register";

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

    login () {
        Actions.Login()
    }

    register () {
        console.log('register')
    }
    
    render() {
        return (
            <Register
                emailId={emailId}
                passwordId={passwordId}
                repeatPasswordId={repeatPasswordId}
                showError={this.state.showError}
                onChange={this.onChange.bind(this)}
                Login={this.login.bind(this)}
                Register={this.register.bind(this)}
            />
        )
    }
}
