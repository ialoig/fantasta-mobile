import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Account from './Account';

import Settings from './Settings/Settings';

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
        const userID = User.Get().id
        const email = User.Get().email;
        const username = User.Get().username ? User.Get().username : "user001";

        console.log("Initializing params: userID["+userID+"], email["+email+"], username["+username+"]")

        return (
            <NavigationContainer>
                <AccountStack.Navigator initialRouteName="AccountContainer" headerMode="none" mode="modal">
                    <AccountStack.Screen name="Account" component={Account} 
                        initialParams={
                            {
                                userID: userID,
                                email: email,
                                username: username
                            }} />
                    <AccountStack.Screen name="AccountDetailsNavigator" component={AccountDetailsNavigator} />
                    <AccountStack.Screen name="Settings" component={Settings} />
                    <AccountStack.Screen name="LeagueOptions" component={LeagueOptions} />
                    <AccountStack.Screen name="Support" component={Support} />
                </AccountStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AccountNavigator
