import { StyleSheet } from "react-native"
import { dynamicHeight, dynamicWidth } from "../utils/pixelResolver"
import colors from "./colors"

export default StyleSheet.create({
	container: {
		maxWidth: dynamicWidth(327),
	},
	hasError: {
		backgroundColor: colors.errorRedBg,
		borderColor: colors.errorRed,
		borderStyle: "solid",
		borderWidth: 1
	},
	inputError: {
		color: colors.errorRed
	},
	inputForm: {
		backgroundColor: colors.greyLight,
		borderRadius: 40,
		height: dynamicHeight(327, 56),
		paddingHorizontal: 32,
		textAlignVertical: "center"
	},
	isValid: {
		backgroundColor: colors.successGreen,
		borderColor: colors.primary,
		borderStyle: "solid",
		borderWidth: 2
	}

})