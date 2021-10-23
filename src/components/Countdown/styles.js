import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"


export default StyleSheet.create({
	countdown: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	countdown_text: {
		color: colors.primary
	},
	timer: {
		alignItems: "center",
		backgroundColor: colors.secondary,
		borderRadius: 14,
		height: dynamicHeight(327, 40),
		justifyContent: "center",
		marginHorizontal: 4,
		width: dynamicWidth(40)
	}
})
