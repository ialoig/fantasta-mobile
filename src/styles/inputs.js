import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
	container: {
		paddingVertical: 4,
		width: "100%"
	},
	hasError: {
		backgroundColor: colors.errorRedBg,
		borderColor: colors.errorRed,
		borderStyle: "solid",
		borderWidth: 1,
		marginTop: 0
	},
	inputError: {
		color: colors.errorRed
	},
	inputForm: {
		backgroundColor: colors.greyLight,
		borderRadius: 40,
		marginTop: 8,
		minHeight: 56,
		paddingHorizontal: 32,
		paddingTop: 2,
		textAlignVertical: "center"
	},
	isValid: {
		backgroundColor: colors.successGreen,
		borderColor: colors.primary,
		borderStyle: "solid",
		borderWidth: 2
	}

})