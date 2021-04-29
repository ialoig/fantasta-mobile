import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
	image: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	},
	// title: {
	// 	alignSelf: "center",
	// 	color: colors.secondary,
	// 	paddingTop: 8,
	// },
	// description: {
	// 	alignSelf: "center",
	// 	color: colors.textPlaceholder,
	// 	paddingVertical: 4
	// },
	title: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 22,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 30,
		textAlign: "center"
	},
	description: {
		paddingTop: 10,
		color: colors.textPlaceholder,
		fontFamily: "PoppinsMedium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0.25,
		lineHeight: 20,
		textAlign: "center"
	},
})
