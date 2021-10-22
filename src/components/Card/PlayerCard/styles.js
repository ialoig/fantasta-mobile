import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../../utils/pixelResolver"


export const size = StyleSheet.create({
	auction: {
		height: dynamicHeight(327, 160),
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327)
	},
	large: {
		height: dynamicHeight(327, 160),
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327)
	},
	small: {
		height: dynamicHeight(327, 80),
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327),
	},
})

export const style = StyleSheet.create({
	arrow: {
		alignItems: "flex-end",
		flex: 1,
		justifyContent: "center"
	},
	auction: {
		alignItems: "center",
	},
	auction_price: {
		alignItems: "flex-end",
		flex: 1,
		paddingRight: 12
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
		justifyContent: "center"
	},
	playerInfo: {
		justifyContent: "center"
	},
	player_initial_price: {
		flex: 1,
		paddingLeft: 12
	},
	player_price: {
		flexDirection: "row",
	},
	separator: {
		alignItems: "center"
	},
	small: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
