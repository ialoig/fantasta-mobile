import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"

export default StyleSheet.create({
	radio: {
		backgroundColor: colors.grey,
		maxHeight: 32,
		maxWidth: 32
	},
	radioButton: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 4
	},
	radioLabel: {
		marginVertical: 24
	}
})
