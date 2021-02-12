import React, { Component } from 'react'

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import AccountContainer from './AccountContainer';

import Settings from './Settings/Settings';

import LeagueOptions from './LeagueOptions/LeagueOptions';

//Support
import Support from './Support/Support';
import Feedback from './Support/Feedback';
//Account Details
import AccountDetails from './AccountDetails/AccountDetails';
import Header from '../../components/Header/Header';


const Stack = createStackNavigator();

export class AccountNavigator extends Component {
    
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="AccountContainer" >
                    <Stack.Screen name="AccountContainer" component={AccountContainer} 
                        options={{
                            headerTitle: props => <Header title="account"/>
                        }}/>
                    <Stack.Screen name="AccountDetails" component={AccountDetails} />
                    <Stack.Screen name="Settings" component={Settings} />
                    <Stack.Screen name="LeagueOptions" component={LeagueOptions} />
                    <Stack.Screen name="Support" component={Support} />
                    <Stack.Screen name="Feedback" component={Feedback} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default AccountNavigator
