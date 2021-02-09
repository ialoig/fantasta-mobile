import React, { Component } from 'react'
import Account from './Account'


export class AccountContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : "user@email.com"
        }
    }

    render() {
        return (
            <Account 
                email={this.state.email}
            />
        )
    }
}

export default AccountContainer
