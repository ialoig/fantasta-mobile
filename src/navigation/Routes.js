import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import { GetStartedContainer } from '../containers/GetStarted/GetStartedContainer'
import { RegisterContainer } from '../containers/Register/RegisterContainer'
import { LoginContainer } from '../containers/Login/LoginContainer'
import { SplashScreenContainer } from '../containers/SplashScreen/SplashScreenContainer'
import { HomeContainer } from '../containers/Home/HomeContainer'
import AccountNavigator from './AccountNavigator'
import { CreateContainer } from '../containers/Create/CreateContainer'
import { JoinLeagueContainer } from '../containers/JoinLeague/JoinLeagueContainer'
import { DashboardContainer } from '../containers/Dashboard/DashboardContainer'


const AppStack = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<AppStack.Navigator headerMode="none" initialRouteName="SplashScreen" >
				<AppStack.Screen name="SplashScreen" component={SplashScreenContainer} />
				<AppStack.Screen name="Login" component={LoginContainer} />
				<AppStack.Screen name="Register" component={RegisterContainer} />
				<AppStack.Screen name="GetStarted" component={GetStartedContainer} />
				<AppStack.Screen name="Home" component={HomeContainer} />
				<AppStack.Screen name="AccountNavigator" component={AccountNavigator} />
				<AppStack.Screen name="CreateLeague" component={CreateContainer} />
				<AppStack.Screen name="JoinLeague" component={JoinLeagueContainer} />
				<AppStack.Screen name="Dashboard" component={DashboardContainer} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}