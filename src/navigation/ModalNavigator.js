
import { useRoute } from "@react-navigation/native"
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack"
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
import { ModalRoutes } from "./routesName"



const ModalStack = createStackNavigator()


export default function ModalNavigator()  {

	const route = useRoute()
	const { email, username} = route.params

	return (
		<ModalStack.Navigator
			initialRouteName="AccountDetails"
			mode="modal"
			screenOptions={screenModalConfig}>
			<ModalStack.Screen name={ModalRoutes.EMAIL_SETTINGS} component={EmailSettings} initialParams={{email: email}}/>
			<ModalStack.Screen name={ModalRoutes.USERNAME_SETTINGS} component={UsernameSettings}/>
			<ModalStack.Screen name={ModalRoutes.DELETE_ACCOUNT} component={DeleteAccount}/>
			<ModalStack.Screen name={ModalRoutes.LANGUAGE} component={Language} />
			<ModalStack.Screen name={ModalRoutes.FEEDBACK} component={Feedback} />
			<ModalStack.Screen name={ModalRoutes.CONTACTUS} component={ContactUs} />
		</ModalStack.Navigator>
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


const screenModalConfig = {
	headerShown: false,
	gestureEnabled: true,
	cardOverlayEnabled: false,
	...TransitionPresets.ModalPresentationIOS,
}