import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"

export const badge = StyleSheet.create({
	style: {
		backgroundColor: colors.grey,
		borderRadius: 16,
		flex: 1,
		justifyContent: "center",
		margin: 2,
		maxHeight: dynamicHeight(60, 25),
		maxWidth: dynamicWidth(60),
		minHeight: dynamicHeight(60, 25),
	}
})

export const text = StyleSheet.create({
	title: {
		color: colors.white,
		textAlign: "center",
		textAlignVertical: "center",
		textTransform: "uppercase"
	}
})