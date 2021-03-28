import { createStackNavigator} from "@react-navigation/stack"
import React from "react"

import { 
	Account, 
	AccountDetails, 
	ContactUs, 
	DeleteAccount, 
	EmailSettings, 
	Feedback, 
	Language,
	Settings,
	Support,
	UsernameSettings
} from "../containers/Account"
import {closeKeyboardOnClose, defaultModalScreenOptions, getScreenConfig } from "./routesConfig"
import routes from "./routesNames"


const AccountStack = createStackNavigator()

/**
 *  Account Navigator implements screen whithin Account page 
 */
export default function AccountNavigator()  {

	return (
		<AccountStack.Navigator
			initialRouteName={routes.ACCOUNT}
			{...defaultModalScreenOptions}
		>
			<AccountStack.Screen name={routes.ACCOUNT} component={Account} 
				options={
					getScreenConfig(false, false, true)
				}/>
			<AccountStack.Screen name={routes.ACCOUNT_DETAILS} component={AccountDetails} 
				options={
					getScreenConfig(false, false, true)
				} />
			<AccountStack.Screen name={routes.SUPPORT} component={Support} 
				options={
					getScreenConfig(false, false, true)
				}/>
			<AccountStack.Screen name={routes.SETTINGS} component={Settings} 
				options={
					getScreenConfig(false, false, true)
				}/>
			<AccountStack.Screen name={routes.EMAIL_SETTINGS} component={EmailSettings}
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
			<AccountStack.Screen name={routes.USERNAME_SETTINGS} component={UsernameSettings}
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
			<AccountStack.Screen name={routes.DELETE_ACCOUNT} component={DeleteAccount}
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
			<AccountStack.Screen name={routes.LANGUAGE} component={Language} 
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
			<AccountStack.Screen name={routes.FEEDBACK} component={Feedback} 
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
			<AccountStack.Screen name={routes.CONTACTUS} component={ContactUs} 
				{...closeKeyboardOnClose}
				options={
					getScreenConfig(true, false, true)
				}/>
		</AccountStack.Navigator>
	)
}
