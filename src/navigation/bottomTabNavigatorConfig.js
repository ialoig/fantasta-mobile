import { Platform, StyleSheet } from "react-native"
import colors from "../styles/colors"
import { getBottomNavigationHeight } from "../utils/pixelResolver"


export const bottomTabStyle = {
	position: "absolute",
	height: getBottomNavigationHeight(),
	borderTopWidth: 0,
	borderTopLeftRadius: 32,
	borderTopRightRadius: 32,
	backgroundColor: colors.background,
}


export const bottomTabShadow = StyleSheet.create({
	...Platform.select({
		android: {
			elevation: 15
		},
		ios: {
			shadowOpacity: 0.06,
			shadowRadius: 4,
			shadowOffset: {
				width: 0,
				height: StyleSheet.hairlineWidth
			}
		},
		default: {
			borderBottomWidth: StyleSheet.hairlineWidth
		}
	})
})