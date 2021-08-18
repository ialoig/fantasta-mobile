import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"


export default StyleSheet.create({
	budgetCard: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		height: dynamicHeight(327, 200),
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
})
