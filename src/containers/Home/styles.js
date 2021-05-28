
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth } from "../../utils/deviceUtils"

export default StyleSheet.create({
	buttons: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: deviceScreenWidth * 0.06,
	},
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background
	},
	description: {
		color: colors.text,
		paddingTop: 10
	},
	list: {
		flex: 1,
		paddingBottom: 0,
		paddingHorizontal: deviceScreenWidth * 0.06,
		paddingTop: 20
	}
})
