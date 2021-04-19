
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth } from "../../utils/deviceUtils"
import { getHeight } from "../../utils/pixelResolver"

export default StyleSheet.create({
	buttons: {
		alignItems: "center",
		backgroundColor: colors.background,
		//borderBottomLeftRadius: 64,
		//borderBottomRightRadius: 64,
		flexDirection: "row",
		height: getHeight(200),
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
