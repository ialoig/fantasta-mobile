
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"

export default StyleSheet.create({
	chart: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		height: dynamicHeight(327, 180),
		justifyContent: "center",
		marginHorizontal: 0,
		marginTop: 12,
		position: "relative",
		width: dynamicWidth(327)
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06
	},
	team: {
		height: deviceScreenHeight - 150,
	},
})
