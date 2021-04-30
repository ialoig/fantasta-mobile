import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
	description: {
		color: colors.textPlaceholder,
		fontFamily: "PoppinsMedium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0.25,
		lineHeight: 20,
		paddingTop: 10,
		textAlign: "center"
	},
	image: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
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
