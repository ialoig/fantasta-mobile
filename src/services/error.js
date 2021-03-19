
import I18n from "i18n-js"
import { Alert } from "react-native"

/**
 * 
 * @param {*} error to handle
 * @param {*} createAlert boolean for enabling creation of an alert on the mobile
 */
const handleError = (error, createAlert) => {    
	console.log(`[Error]: ${error}`)
	if (createAlert) {
		let info = error && error.info || {}
		showAlert(info.title, info.message)
	}
}

/**
 * 
 * @param {*} title of the alert
 * @param {*} message of the alert
 */
const showAlert = (title, message) => {
	Alert.alert(
		I18n.translate(title),
		I18n.translate(message),
		[{ text: "OK" }],
		{ cancelable: false }
	)
}

export const Error = {
	handleError, showAlert
}