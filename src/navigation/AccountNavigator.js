import { createStackNavigator} from "@react-navigation/stack"
import React from "react"

import Account from "../containers/Account/Account"
import AccountDetails from "../containers/Account/AccountDetails/AccountDetails"
import DeleteAccount from "../containers/Account/AccountDetails/DeleteAccount"
import EmailSettings from "../containers/Account/AccountDetails/EmailSettings"
import UsernameSettings from "../containers/Account/AccountDetails/UsernameSettings"
import Language from "../containers/Account/Settings/Language"
import Settings from "../containers/Account/Settings/Settings"
import ContactUs from "../containers/Account/Support/ContactUs"
import Feedback from "../containers/Account/Support/Feedback"
import Support from "../containers/Account/Support/Support"
import { User } from "../services"
import {closeKeyboardOnClose, screenModalConfig, screenOptions} from "./routesConfig"
import routes from "./routesNames"


const AccountStack = createStackNavigator()

/**
 *  Account Navigator implements screen whithin Account page 
 */
export default function AccountNavigator()  {
	const params = userParams()

	return (
		<AccountStack.Navigator
			initialRouteName={routes.ACCOUNT}
			{...screenOptions}>
			<AccountStack.Screen name={routes.ACCOUNT} component={Account} initialParams={params} />
			<AccountStack.Screen name={routes.ACCOUNT_DETAILS} component={AccountDetails} initialParams={params} />
			<AccountStack.Screen name={routes.SUPPORT} component={Support} />
			<AccountStack.Screen name={routes.SETTINGS} component={Settings} />
			<AccountStack.Screen 
				name={routes.EMAIL_SETTINGS} 
				component={EmailSettings}
				{...closeKeyboardOnClose}
				options={screenModalConfig}/>
			<AccountStack.Screen 
				name={routes.USERNAME_SETTINGS} 
				component={UsernameSettings}
				{...closeKeyboardOnClose}
				options={screenModalConfig}/>
			<AccountStack.Screen 
				name={routes.DELETE_ACCOUNT} 
				component={DeleteAccount}
				{...closeKeyboardOnClose}
				options={screenModalConfig}/>
			<AccountStack.Screen name={routes.LANGUAGE} component={Language} />
			<AccountStack.Screen name={routes.FEEDBACK} component={Feedback} />
			<AccountStack.Screen name={routes.CONTACTUS} component={ContactUs} />
		</AccountStack.Navigator>
	)
}

function userParams () {
	const email = User.Get().email
	const username = User.Get().username ? User.Get().username : email

	return {
		email: email,
		username: username
	}
}
