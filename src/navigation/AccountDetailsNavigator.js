import React, { Component } from 'react'

import AccountDetails from "../containers/Account/AccountDetails/AccountDetails"
import EmailSettings from "../containers/Account/AccountDetails/EmailSettings"
import UsernameSettings from "../containers/Account/AccountDetails/UsernameSettings"
import DeleteAccount from "../containers/Account/AccountDetails/DeleteAccount"

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
