import React from "react";
import { Alert } from "react-native";
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

    login () {
        if ( this.state[emailId] && this.state[passwordId] )
        {
            Alert.alert('Tutto ok!!!')
        }
        else
        {
            this.setState({showError: true})
        }
    }

    register () {
        console.log('register')
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
