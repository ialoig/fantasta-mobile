import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const size = StyleSheet.create({
	large: {
		height: dynamicHeight(327, 160),
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
})

export const style = StyleSheet.create({
	arrow: {
		alignItems: "flex-end",
		flex: 1,
		justifyContent: "center"
	},
	card: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		marginTop: 12,
		position: "relative",
	},
	large: {
		alignItems: "center",
		justifyContent: "center"
	},
	player: {
		flexDirection: "row",
	},
	playerInfo: {
		paddingLeft: 12,
		paddingRight: 12
	},
	separator: {
		alignItems: "center"
	},
	small: {
		alignContent: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
