import { Alert } from 'react-native'

/**
 * 
 * @param {*} error to handle
 * @param {*} createAlert boolean for enabling creation of an alert on the mobile
 */
const handleError = (error, createAlert) => {    
    console.log(`[Error]: ${error}`)
    if (createAlert) {
        let info = error && error.info || {}
        showAlert(info.subTitle, info.message)
    }
}

/**
 * 
 * @param {*} title of the alert
 * @param {*} message of the alert
 */
const showAlert = (title, message) => {
    Alert.alert(
        title,
        message,
        [{ text: "OK" }],
        { cancelable: false }
    )
}

export const Error = {
    handleError, showAlert
}