import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import { CreateContainer } from "../containers/Create/CreateContainer"
import { DashboardContainer } from "../containers/Dashboard/DashboardContainer"
import ForgotPassword from "../containers/ForgotPassword/ForgotPassword"
import ForgotPasswordConfirmation from "../containers/ForgotPassword/ForgotPasswordConfirmation"
import { GetStartedContainer } from "../containers/GetStarted/GetStartedContainer"
import { HomeContainer } from "../containers/Home/HomeContainer"
import { JoinLeagueContainer } from "../containers/JoinLeague/JoinLeagueContainer"
import { LoginContainer } from "../containers/Login/LoginContainer"
import CompleteRegistratioConfirmation from "../containers/Register/CompleteRegistratioConfirmation"
import CompleteRegistration from "../containers/Register/CompleteRegistration"
import { RegisterContainer } from "../containers/Register/RegisterContainer"
import ResetPassword from "../containers/ResetPassword/ResetPassword"
import ResetPasswordConfirmation from "../containers/ResetPassword/ResetPasswordConfirmation"
import ResetPasswordError from "../containers/ResetPassword/ResetPasswordError"
import { SplashScreenContainer } from "../containers/SplashScreen/SplashScreenContainer"
import AccountNavigator from "./AccountNavigator"
import { defaultScreenOptions, getScreenConfig, noHeaderScreenConfig } from "./routesConfig"
import routes from "./routesNames"

const AppStack = createStackNavigator()

export default function Routes() {
	return (
		<NavigationContainer>
			<AppStack.Navigator
				initialRouteName={routes.SPLASHSCREEN}
				{...defaultScreenOptions} >
				<AppStack.Screen
					name={routes.SPLASHSCREEN}
					component={SplashScreenContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.LOGIN}
					component={LoginContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.REGISTER}
					component={RegisterContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.COMPLETE_REGISTER}
					component={CompleteRegistration}
					options={getScreenConfig(false, false, false)} />
				<AppStack.Screen
					name={routes.COMPLETE_REGISTER_CONFIRMATION}
					component={CompleteRegistratioConfirmation}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.RESET_PASSWORD}
					component={ResetPassword}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.RESET_PASSWORD_CONFIRMATION}
					component={ResetPasswordConfirmation}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.RESET_PASSWORD_ERROR}
					component={ResetPasswordError}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.FORGOT_PASSWORD}
					component={ForgotPassword}
					options={getScreenConfig(false, "login", true)} />
				<AppStack.Screen
					name={routes.FORGOT_PASSWORD_CONFIRMATION}
					component={ForgotPasswordConfirmation}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.GETSTARTED}
					component={GetStartedContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.HOME}
					component={HomeContainer}
					options={getScreenConfig(false, "account", false)} />
				<AppStack.Screen
					name={routes.CREATE_LEAGUE}
					component={CreateContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.JOIN_LEAGUE}
					component={JoinLeagueContainer}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.DASHBOARD}
					component={DashboardContainer}
					options={getScreenConfig(false, "account", false)} />
				<AppStack.Screen
					name={routes.ACCOUNTNAVIGATOR}
					component={AccountNavigator}
					options={noHeaderScreenConfig} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}
