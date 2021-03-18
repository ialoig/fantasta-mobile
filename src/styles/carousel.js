
import { StyleSheet } from "react-native"
import colors from "./colors"

export default StyleSheet.create({
	activeDotStyle: {
		backgroundColor: colors.primary,
		borderRadius: 3,
		height: 8,
		width: 30
	},
	description: {
		color: colors.textPlaceholder,
		fontFamily: "PoppinsMedium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0.25,
		lineHeight: 20,
		textAlign: "center"
	},
	dotStyle: {
		backgroundColor: colors.greenDisabled,
		borderRadius: 3,
		height: 8,
		width: 10
	},
	title: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 30,
		textAlign: "center"
	}
})