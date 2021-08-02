
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth } from "../../utils/deviceUtils"

export default StyleSheet.create({
	buttons: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 8
	},
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		paddingHorizontal: deviceScreenWidth * 0.06,
	},
	description: {
		color: colors.text,
		paddingTop: 10
	},
	list: {
		paddingBottom: 80
	}
})
