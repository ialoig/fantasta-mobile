import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import { CreateContainer } from "../containers/Create/CreateContainer"
import { DashboardContainer } from "../containers/Dashboard/DashboardContainer"
import { GetStartedContainer } from "../containers/GetStarted/GetStartedContainer"
import { HomeContainer } from "../containers/Home/HomeContainer"
import { JoinLeagueContainer } from "../containers/JoinLeague/JoinLeagueContainer"
import { LoginContainer } from "../containers/Login/LoginContainer"
// import CompleteRegistration from "../containers/Register/CompleteRegistration"
import { RegisterContainer } from "../containers/Register/RegisterContainer"
import { SplashScreenContainer } from "../containers/SplashScreen/SplashScreenContainer"
import AccountNavigator from "./AccountNavigator"
import { defaultScreenOptions } from "./routesConfig"
import routes from "./routesNames"

const AppStack = createStackNavigator()

export default function Routes() {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				{...defaultScreenOptions}
				initialRouteName={routes.SPLASHSCREEN}>
				<AppStack.Screen name={routes.SPLASHSCREEN} component={SplashScreenContainer} />
				<AppStack.Screen name={routes.LOGIN} component={LoginContainer} />
				<AppStack.Screen name={routes.REGISTER} component={RegisterContainer} />
				{/* <AppStack.Screen name={routes.COMPLETE_REGISTER} component={CompleteRegistration} /> */}
				<AppStack.Screen name={routes.GETSTARTED} component={GetStartedContainer} />
				<AppStack.Screen name={routes.HOME} component={HomeContainer} />
				<AppStack.Screen name={routes.CREATE_LEAGUE} component={CreateContainer} />
				<AppStack.Screen name={routes.JOIN_LEAGUE} component={JoinLeagueContainer} />
				<AppStack.Screen name={routes.DASHBOARD} component={DashboardContainer} />
				<AppStack.Screen name={routes.ACCOUNTNAVIGATOR} component={AccountNavigator} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}