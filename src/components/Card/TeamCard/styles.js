import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../../utils/pixelResolver"


export default StyleSheet.create({
	info: {
		flex: 1
	},	
	infoRoles: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	infoTeam: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	},
})


export const size = StyleSheet.create({
	small: {
		height: dynamicHeight(327, 80),
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327)
	},
})

export const card =  StyleSheet.create({
	card: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		marginTop: 12,
		position: "relative",
	},
	small: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
