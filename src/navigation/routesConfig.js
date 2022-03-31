import { TransitionPresets } from "@react-navigation/stack"
import React from "react"
import { Keyboard } from "react-native"
import { IconButton } from "../components"
import EmptyButtonPlaceHolder from "../components/Header/EmptyButtonPlaceHolder"
import HeaderRightButton from "../components/Header/HeaderRightButton"
import HeaderTitle from "../components/Header/HeaderTitle"
import { android, deviceHeight, deviceScreenWidth, ios } from "../utils/deviceUtils"


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
 *  Default configuration for screen options
 * 
 */
export const defaultScreenOptions = {
	headerMode: "screen",
}

/**
 *  Screen option for Navigator where modals are defined.
 *  It works on Android devices: when modal is dismissed keyboard does not dismiss automatically,
 *  but it's closed by a custom listener.
 * 
 */
export const defaultModalScreenOptions = {
	...defaultScreenOptions,
	keyboardHandlingEnabled: ios ? true : false,
}

/**
 *  Screen configuration for pages with no header defined
 * 
 */
export const noHeaderScreenConfig = {
	headerShown: false
}


/**
 *  Modal screen configuration for IOS devices
 * 
 */
const screeniOSModalConfig = {
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


export const screenModalConfig = ios ? screeniOSModalConfig : android ? screenAndroidModalConfig : {}


export const headerTitleConfig = {
	headerTitleAlign: "center",
	// eslint-disable-next-line react/display-name
	headerTitle: props => <HeaderTitle {...props}/>,
	headerStyle: {
		elevation: 0,//define shadow offset line
		shadowColor: "transparent", //for iOS configuration, disable shadow
		borderTopLeftRadius: ios ? 32 : 0, //rounded top border for iOS modal
		borderTopRightRadius: ios ? 32 : 0 //rounded top border for iOS modal
	},
	headerStatusBarHeight: 24,
}

/**
 *  Disable right button on header
 * 
 */
export const headerNORightConfig = {
	// eslint-disable-next-line react/display-name
	headerRight: () => <EmptyButtonPlaceHolder />,
}

/**
 *  Set a back button on header and return a back icon
 * 
 */
export const headerBackConfig = {
	// eslint-disable-next-line react/display-name
	headerLeft: (props) => 
		<IconButton {...props}
			icon 
			type={"back"}
			width={35} 
			height={35} 
		/>,
	headerLeftContainerStyle: {
		paddingLeft: deviceScreenWidth * 0.04
	},
}

/**
 *  Disable back button on header
 * 
 */
export const headerNOBackConfig = {
	// eslint-disable-next-line react/display-name
	headerBackImage: () => <EmptyButtonPlaceHolder />
}


/**
 * 
 * @param {String} type : specifies icon type and route for the right button
 * @returns an Icon object with the onPress prop
 */
export const getHeaderRightConfig = (type) => {

	return {
		// eslint-disable-next-line react/display-name
		headerRight: (props) => <HeaderRightButton type={type} {...props}/>,
		headerRightContainerStyle: {
			paddingRight: deviceScreenWidth * 0.04
		}
	}
}

/**
 * 
 * @param {Boolean} modal : if true, screen will be shown as modal and with specific transitions
 * @param {String} right : string that specifies the route and icon to be setted as right button
 * @param {Boolean} back : if true, back button will be shown
 * @returns option prop for Screen
 */
export const getScreenConfig = (modal, right, back) => {

	const headerRight = right ? getHeaderRightConfig(right) : headerNORightConfig
	const headerBack = back ? headerBackConfig : headerNOBackConfig
	const modalConfig = modal ? screenModalConfig : null

	return {
		...headerTitleConfig, //define header style and title style 
		...headerRight, //define right button component 
		...headerBack, //define back button component 
		...modalConfig //define modal configuration and transitions 
	}
}


