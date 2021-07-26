import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"
import { dynamicHeight } from "../../../utils/pixelResolver"

export default StyleSheet.create({
	inputForm: {
		backgroundColor: colors.greyLight,
		borderRadius: 16,
		height: dynamicHeight(327, 48),
		paddingHorizontal: 32,
		textAlignVertical: "center"
	},
})
