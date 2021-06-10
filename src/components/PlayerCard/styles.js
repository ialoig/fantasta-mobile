import { StyleSheet } from "react-native"
import { COLORS } from "../../styles"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const size = StyleSheet.create({
	large: {
		maxHeight: dynamicHeight(327, 160),
		maxWidth: dynamicWidth(327),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
	},
	small: {
		maxHeight: dynamicHeight(327, 80),
		maxWidth: dynamicWidth(327),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20),
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
		backgroundColor: COLORS.greyLight,
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
