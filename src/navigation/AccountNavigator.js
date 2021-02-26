import React, { Component } from 'react'

import { createStackNavigator } from "@react-navigation/stack"
import Account from '../containers/Account/Account';

//Support
import Support from '../containers/Account/Support/Support';
import Feedback from '../containers/Account/Support/Feedback';
//Account Details
import AccountDetailsNavigator from '../containers/Account/AccountDetails/AccountDetailsNavigator';

import Settings from '../containers/Account/Settings/Settings';

import { User } from "../services"

const AccountStack = createStackNavigator();

export class AccountNavigator extends Component {
    
    render() {
        const email = User.Get().email;
        const username = User.Get().username ? User.Get().username : email;

        console.log("[AccountNavigator] - params: email["+email+"], username["+username+"]")

        return (
            <AccountStack.Navigator initialRouteName="Account" headerMode="none" mode="modal">
                <AccountStack.Screen name="Account" component={Account} 
                    initialParams={
                        {
                            email: email,
                            username: username
                        }} />
                <AccountStack.Screen name="AccountDetailsNavigator" component={AccountDetailsNavigator} />
                <AccountStack.Screen name="Settings" component={Settings} />
                <AccountStack.Screen name="Support" component={Support} />
            </AccountStack.Navigator>
        )
    }
}

export default AccountNavigator
