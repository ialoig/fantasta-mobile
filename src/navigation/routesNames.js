
/**
 *  Routes definition for Navigator. 
 *  Needed to define params to be passed as initial params to specific screens
 */
const RoutesNavigator = {
	ACCOUNTNAVIGATOR: "AccountNavigator"
}


/**
 *  Routes definition implemented as simple pages (not modal)
 * 
 */
const RoutesName = {
	SPLASHSCREEN: "SplashScreen",
	COMPLETE_REGISTER: "CompleteRegister",
	GETSTARTED: "GetStarted",
	LOGIN: "Login",
	REGISTER: "Register",
	HOME: "Home",
	DASHBOARD: "Dashboard",
	JOIN_LEAGUE: "JoinLeague",
	CREATE_LEAGUE: "CreateLeague",
	ACCOUNT: "Account",
	ACCOUNT_DETAILS: "AccountDetails",
	SUPPORT: "Support",
	SETTINGS: "Settings"
}


/**
 *  Routes definition implemented as modal and which contains specific screen options
 * 
 */
const ModalRoutes = {
	EMAIL_SETTINGS: "EmailSettings",
	USERNAME_SETTINGS: "UsernameSettings",
	DELETE_ACCOUNT: "DeleteAccount",
	LANGUAGE: "Language",
	FEEDBACK: "Feedback",
	CONTACTUS: "ContactUs"
}

const routes = {
	...RoutesName,
	...ModalRoutes,
	...RoutesNavigator
}

export default routes