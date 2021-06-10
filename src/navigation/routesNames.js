/**
 *  Routes definition for Navigator. 
 *  Needed to define params to be passed as initial params to specific screens
 */
const RoutesNavigator = {
	ACCOUNTNAVIGATOR: "AccountNavigator",
	BOTTOMTABNAVIGATOR: "BottomTabNavigator"
}


/**
 *  Routes definition implemented as simple pages (not modal)
 * 
 */
const RoutesName = {
	SPLASHSCREEN: "SplashScreen",
	COMPLETE_REGISTER: "CompleteRegister",
	COMPLETE_REGISTER_CONFIRMATION: "CompleteRegisterConfirmation",
	GETSTARTED: "GetStarted",
	LOGIN: "Login",
	REGISTER: "Register",
	FORGOT_PASSWORD: "ForgotPassword",
	FORGOT_PASSWORD_CONFIRMATION: "ForgotPasswordConfirmation",
	RESET_PASSWORD: "ResetPassword",
	RESET_PASSWORD_CONFIRMATION: "ResetPasswordConfirmation",
	RESET_PASSWORD_ERROR: "ResetPasswordError",
	HOME: "Home",
	DASHBOARD: "Dashboard",
	JOIN_LEAGUE: "JoinLeague",
	CREATE_LEAGUE: "CreateLeague",
	ACCOUNT: "Account",
	ACCOUNT_DETAILS: "AccountDetails",
	SUPPORT: "Support",
	SETTINGS: "Settings",
	TEAM: "Team",
	MARKET: "Market",
	PLAYERS: "Players"
}


/**
 *  Routes definition implemented as modal and which contains specific screen options
 * 
 */
const ModalRoutes = {
	EMAIL_SETTINGS: "EmailSettings",
	USERNAME_SETTINGS: "UsernameSettings",
	PASSWORD_SETTINGS: "PasswordSettings",
	DELETE_ACCOUNT: "DeleteAccount",
	LANGUAGE: "Language",
	FEEDBACK: "Feedback",
	CONTACTUS: "ContactUs",
	PLAYER_DETAILS: "PlayerDetails"
}

const routes = {
	...RoutesName,
	...ModalRoutes,
	...RoutesNavigator
}

export default routes