import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"


export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06
	},
	countdown: {
		alignItems: "center",
		backgroundColor: colors.secondary,
		borderRadius: 14,
		height: dynamicHeight(327, 40),
		justifyContent: "center",
		width: dynamicWidth(40)
	},
	countdown_container: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	countdown_text: {
		color: colors.primary
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
