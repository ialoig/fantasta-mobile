import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const size = StyleSheet.create({
	default: {
		height: dynamicHeight(327, 180),
		marginHorizontal: 0,
		width: dynamicWidth(327),
	},
	large: {
		height: dynamicHeight(327, 160),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20),
		width: dynamicWidth(327),
	},
	medium: {
		height: dynamicHeight(327, 120),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20),
		width: dynamicWidth(327)
	},
	small: {
		height: dynamicHeight(327, 80),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20),
		width: dynamicWidth(327),
	},
	square: {
		height: dynamicHeight(327, 140),
		width: dynamicWidth(140),
	},
})


export const style = StyleSheet.create({
	arrow: {
		alignItems: "flex-end"
	},
	card: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		marginTop: 12,
		position: "relative",
	},
	default: {
		alignItems: "center",
		justifyContent: "center",
	},
	large: {
		alignItems: "center",
		justifyContent: "center"
	},
	medium: {
		alignItems: "center",
		flexDirection: "row",
	},
	small: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "flex-start",
	},
	square: {
		alignItems: "center",
		justifyContent: "center"
	}
})
