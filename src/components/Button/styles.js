import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"

export const button = StyleSheet.create({
	alert: {
		backgroundColor: colors.errorRed,
	},
	border: {
		borderColor: colors.primary,
		borderStyle: "solid",
		borderWidth: 1
	},
	button: {
		borderRadius: 40,
		flex: 1,
		justifyContent: "center",
		marginTop: 12
	},
	large: {
		maxHeight: dynamicHeight(327, 56),
		minHeight: dynamicHeight(327, 56),
		width: dynamicWidth(327)
	},
	primary: {
		backgroundColor: colors.primary
	},
	secondary: {
		backgroundColor: colors.white,
	},
	small: {
		maxHeight: dynamicHeight(156, 56),
		minHeight: dynamicHeight(156, 56),
		width: dynamicWidth(156)
	}
})

export const text = StyleSheet.create({
	alert: {
		color: colors.white,
		textAlign: "center"
	},
	primary: {
		color: colors.white,
		textAlign: "center"
	},
	secondary: {
		color: colors.primary,
		textAlign: "center"
	}
})