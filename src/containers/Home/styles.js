
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"

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
	},
	separator: {
		alignSelf: "center",
		backgroundColor: colors.grey,
		borderRadius: 8,
		height: 4,
		marginVertical: 4,
		width: dynamicHeight(375, 64)
	}
})
