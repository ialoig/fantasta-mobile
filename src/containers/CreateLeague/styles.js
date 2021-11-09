
import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth } from "../../utils/deviceUtils"

export default StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		paddingHorizontal: deviceScreenWidth * 0.06
	}
})
