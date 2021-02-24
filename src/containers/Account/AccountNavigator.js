import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Account from './Account';

import LeagueOptions from './LeagueOptions/LeagueOptions';

//Support
import Support from './Support/Support';
import Feedback from './Support/Feedback';
//Account Details
import AccountDetailsNavigator from './AccountDetails/AccountDetailsNavigator';

import { User } from "../../services"

const AccountStack = createStackNavigator();

export class AccountNavigator extends Component {
    
    render() {
        const email = User.Get().email;
        const username = User.Get().username ? User.Get().username : email;

        console.log("[AccountNavigator] - params: email["+email+"], username["+username+"]")

        return (
            <NavigationContainer>
                <AccountStack.Navigator initialRouteName="Account" headerMode="none" mode="modal">
                    <AccountStack.Screen name="Account" component={Account} 
                        initialParams={
                            {
                                email: email,
                                username: username
                            }} />
                    <AccountStack.Screen name="AccountDetailsNavigator" component={AccountDetailsNavigator} />
                    <AccountStack.Screen name="LeagueOptions" component={LeagueOptions} />
                    <AccountStack.Screen name="Support" component={Support} />
                </AccountStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AccountNavigator
