import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"


export default StyleSheet.create({
	badges: {
		flexDirection: "row",
		paddingTop: 8,
	},
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06
	},
	list: {
		// backgroundColor: colors.att,
		// flexGrow: 1,
		paddingBottom: 0,
		paddingTop: 20
	},
	playerContainer: {
		// backgroundColor: colors.por,
		flex: 1,
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})