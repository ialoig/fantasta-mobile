import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"

export default StyleSheet.create({
	buttonPressStyle: {
		alignItems: "center",
		backgroundColor: colors.primary,
		borderRadius: 50,
		justifyContent: "center",
		maxHeight: 32,
		minWidth: 32
	},
	buttonStyle: {
		alignItems: "center",
		backgroundColor: colors.greyLight,
		borderRadius: 50,
		justifyContent: "center",
		maxHeight: 32,
		minWidth: 32
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8,
	},
	input: {
		width: 5
	},
	label: {
		alignSelf: "center",
	}
})
