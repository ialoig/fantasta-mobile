import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"


export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		paddingTop: deviceScreenHeight * 0.06
	},
	list: {
		flex: 1,
		paddingBottom: 0,
		paddingHorizontal: deviceScreenWidth * 0.06,
		paddingTop: 20
	}
})