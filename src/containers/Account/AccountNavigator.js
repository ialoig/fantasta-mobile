import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AccountContainer from './AccountContainer';
import Settings from './Settings';


const Stack = createStackNavigator();

export class AccountNavigator extends Component {
    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AccountContainer" headerMode="none">
                    <Stack.Screen name="AccountContainer" component={AccountContainer} />
                    <Stack.Screen name="Settings" component={Settings} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AccountNavigator
