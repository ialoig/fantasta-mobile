import React, { Component } from 'react'

import AccountDetails from "./AccountDetails"
import EmailSettings from "./EmailSettings"
import UsernameSettings from "./UsernameSettings"
import DeleteAccount from "./DeleteAccount"

import { createStackNavigator, route } from '@react-navigation/stack'

const AccountDetailsStack = createStackNavigator();

export class AccountDetailsNavigator extends Component {

    render() {

        const { email, username } = this.props.route.params

        return (
            <AccountDetailsStack.Navigator mode="modal" initialRouteName="AccountDetails" headerMode="none" >
                <AccountDetailsStack.Screen name="AccountDetails" component={AccountDetails} 
                    initialParams={
                        {
                            email: email,
                            username: username
                        }}/>
                <AccountDetailsStack.Screen name="EmailSettings" component={EmailSettings} initialParams={{email: email}}/>
                <AccountDetailsStack.Screen name="UsernameSettings" component={UsernameSettings}/>
                <AccountDetailsStack.Screen name="DeleteAccount" component={DeleteAccount}/>
            </AccountDetailsStack.Navigator>
        )
    }
}

export default AccountDetailsNavigator
