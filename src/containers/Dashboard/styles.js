
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth, getHeaderHeight } from "../../utils/deviceUtils"

export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.por,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
		// paddingTop: getHeaderHeight() -20
	},
	content: {
		alignContent: "center",
		backgroundColor: colors.att,
		flex: 1,
		justifyContent: "flex-start",
		overflow: "hidden",
	}
})
