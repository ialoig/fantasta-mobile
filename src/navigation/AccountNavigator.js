import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

import Account from "../containers/Account/Account"
import AccountDetails from "../containers/Account/AccountDetails/AccountDetails"
import DeleteAccount from "../containers/Account/AccountDetails/DeleteAccount/DeleteAccount"
import EmailSettings from "../containers/Account/AccountDetails/EmailSettings/EmailSettings"
import UsernameSettings from "../containers/Account/AccountDetails/UsernameSettings/UsernameSettings"
import Language from "../containers/Account/Settings/Language/Language"
import Settings from "../containers/Account/Settings/Settings"
import ContactUs from "../containers/Account/Support/ContactUs/ContactUs"
import Feedback from "../containers/Account/Support/Feedback/Feedback"
import Support from "../containers/Account/Support/Support"
import { closeKeyboardOnClose, defaultModalScreenOptions, getScreenConfig } from "./routesConfig"
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
