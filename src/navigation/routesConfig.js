import { TransitionPresets } from "@react-navigation/stack"
import { Keyboard } from "react-native"
import { android, deviceHeight, ios } from "../utils/deviceUtils"


/**
 * Define closing event for Keyboard when modal is open and Keyboard in active
 * Should be defined on modal screens where there is a text input
 */
export const closeKeyboardOnClose = {
	listeners: {
		transitionEnd: ({ data: { closing } }) => {
			closing && android && Keyboard.dismiss()
		}
	}
}

/**
 *  Basic configuration for screen options
 * 
 */
export const defaultScreenOptions = {
	headerMode: "none"
}


/**
 *  Screen configuration for that screens where a modal behavior is defined
 * 
 */
export const screenOptions = {
	...defaultScreenOptions,
	keyboardHandlingEnabled: ios ? true : false,
	//mode: "modal",
}


/**
 *  Modal screen configuration for IOS devices
 * 
 */
const screenIosModalConfig = {
	cardOverlayEnabled: true,
	cardShadowEnabled: true,
	cardStyle: { backgroundColor: "transparent", overflow: "visible" },
	gestureEnabled: true,
	gestureResponseDistance: {
		vertical: deviceHeight
	},
	...TransitionPresets.ModalPresentationIOS,
}

/**
 *  Modal screen configuration for Android devices
 * 
 */
const screenAndroidModalConfig = {
	cardOverlayEnabled: true,
	cardShadowEnabled: true,
	cardStyle: { backgroundColor: "transparent", overflow: "visible" },
	gestureEnabled: true,
	gestureResponseDistance: {
		vertical: deviceHeight
	},
	...TransitionPresets.FadeFromBottomAndroid,
}


export const screenModalConfig = ios ? screenIosModalConfig : android ? screenAndroidModalConfig : {}