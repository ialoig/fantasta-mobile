import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"


export default StyleSheet.create({
	badges: {
		flexDirection: "row"
	},
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		paddingHorizontal: deviceScreenWidth * 0.06,
		paddingTop: deviceScreenHeight * 0.06,
	},
	list: {
		flex: 1,
		paddingBottom: 0,
		paddingTop: 20
	}
})