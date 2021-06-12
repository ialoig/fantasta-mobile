import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"


export default StyleSheet.create({
	badges: {
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 8
	},
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
		paddingTop: deviceScreenHeight * 0.06,
	},
	list: {
		flex: 1,
		paddingBottom: 0,
		paddingTop: 20
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})