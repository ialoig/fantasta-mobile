import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { AuctionSettings, CreateLeague, LeagueSettings, TeamSettings } from "../containers/CreateLeague"
import ForgotPassword from "../containers/ForgotPassword/ForgotPassword"
import ForgotPasswordConfirmation from "../containers/ForgotPassword/ForgotPasswordConfirmation"
import { GetStartedContainer } from "../containers/GetStarted/GetStartedContainer"
import { HomeContainer } from "../containers/Home/HomeContainer"
import JoinLeague from "../containers/JoinLeague/JoinLeague"
import { LoginContainer } from "../containers/Login/LoginContainer"
import MarketMyTurn from "../containers/Market/MarketMyTurn"
import MarketMyTurnPlayerSelected from "../containers/Market/MarketMyTurnPlayerSelected"
import MarketOpenAuction from "../containers/Market/MarketOpenAuction"
import MarketOpponentTurn from "../containers/Market/MarketOpponentTurn"
import MarketPlayerSelected from "../containers/Market/MarketPlayerSelected"
import MarketWaitingRoom from "../containers/Market/MarketWaitingRoom"
import PlayersDetails from "../containers/Players/PlayersDetails"
import CompleteRegistratioConfirmation from "../containers/Register/CompleteRegistratioConfirmation"
import CompleteRegistration from "../containers/Register/CompleteRegistration"
import { RegisterContainer } from "../containers/Register/RegisterContainer"
import ResetPassword from "../containers/ResetPassword/ResetPassword"
import ResetPasswordConfirmation from "../containers/ResetPassword/ResetPasswordConfirmation"
import ResetPasswordError from "../containers/ResetPassword/ResetPasswordError"
import { SplashScreenContainer } from "../containers/SplashScreen/SplashScreenContainer"
import TeamDetails from "../containers/Team/TeamDetails"
import AccountNavigator from "./AccountNavigator"
import BottomTabNavigator from "./BottomTabNavigator"
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
					options={getScreenConfig(false, "", false)} />
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
					options={getScreenConfig(false, "", true)} />
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
					name={routes.CREATE_LEAGUE_LEAGUE_SETTINGS}
					component={LeagueSettings}
					options={getScreenConfig(false, false, true)} />
				<AppStack.Screen
					name={routes.CREATE_LEAGUE_TEAM_SETTINGS}
					component={TeamSettings}
					options={getScreenConfig(false, false, true)} />
				<AppStack.Screen
					name={routes.CREATE_LEAGUE_AUCTION_SETTINGS}
					component={AuctionSettings}
					options={getScreenConfig(false, false, true)} />
				<AppStack.Screen
					name={routes.CREATE_LEAGUE}
					component={CreateLeague}
					options={getScreenConfig(false, false, true)} />
				<AppStack.Screen
					name={routes.JOIN_LEAGUE}
					component={JoinLeague}
					options={getScreenConfig(false, false, true)} />
				<AppStack.Screen
					name={routes.BOTTOMTABNAVIGATOR}
					component={BottomTabNavigator}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.ACCOUNTNAVIGATOR}
					component={AccountNavigator}
					options={noHeaderScreenConfig} />
				<AppStack.Screen
					name={routes.PLAYER_DETAILS}
					component={PlayersDetails}
					options={getScreenConfig(true, false, true)}/>
				<AppStack.Screen
					name={routes.TEAM_DETAILS}
					component={TeamDetails}
					options={getScreenConfig(true, false, true)}/>
				<AppStack.Screen
					name={routes.MARKET_OPEN_AUCTION}
					component={MarketOpenAuction}
					options={getScreenConfig(false, false, false)}/>
				<AppStack.Screen
					name={routes.MARKET_WAITING_ROOM}
					component={MarketWaitingRoom}
					options={getScreenConfig(false, false, true)}/>
				<AppStack.Screen
					name={routes.MARKET_OPPONENT_TURN}
					component={MarketOpponentTurn}
					options={getScreenConfig(false, false, true)}/>
				<AppStack.Screen
					name={routes.MARKET_PLAYER_SELECTED}
					component={MarketPlayerSelected}
					options={getScreenConfig(false, false, true)}/>
				<AppStack.Screen
					name={routes.MARKET_MY_TURN}
					component={MarketMyTurn}
					options={getScreenConfig(false, false, true)}/>
				<AppStack.Screen
					name={routes.MARKET_MY_TURN_PLAYER_SELECTED}
					component={MarketMyTurnPlayerSelected}
					options={getScreenConfig(false, false, true)}/>
			</AppStack.Navigator>
		</NavigationContainer>
	)
}
