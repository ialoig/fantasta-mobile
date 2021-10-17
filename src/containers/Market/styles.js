import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"


export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
