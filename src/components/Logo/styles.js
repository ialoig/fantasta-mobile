import { StyleSheet } from "react-native"
import { colors } from "../../styles"

export default StyleSheet.create({
	center: {
		alignSelf: "center",
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 24,
		position: "relative",
	},
	text: {
		color: colors.text,
		fontFamily: "PoppinsMedium",
		fontSize: 35,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0,
		textAlign: "center"
	},
	title:{
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 12,
		paddingVertical: 8,
		position: "relative"
	}
})