import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../../utils/pixelResolver"


export default StyleSheet.create({
	info: {
		flex: 1
	},
	infoTeam: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	},
})


export const size = StyleSheet.create({
	card: {
		height: dynamicHeight(327, 50),
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327)
	},
})

export const card =  StyleSheet.create({
	card: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.greyLight,
		borderRadius: 18,
		marginTop: 12,
		position: "relative",
	},
	// eslint-disable-next-line react-native/no-color-literals
	highlight: {
		borderColor: "rgba(31, 204, 121, 0.5)",
		borderWidth: 3,
	},
	small: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
