
import { StyleSheet } from "react-native"
import { deviceScreenHeight, deviceScreenWidth, getHeaderHeight } from "../utils/deviceUtils"
import colors from "./colors"

export default StyleSheet.create({
	buttonContainer: {
		justifyContent: "flex-end",
		paddingTop: 12
	},
	center: {
		alignSelf: "center",
		justifyContent: "center"
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		justifyContent: "center",
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
	},
	content: {
		flex: 1,
		justifyContent: "center"
	},
	flex: {
		flex: 1
	},
	flex_end: {
		justifyContent: "flex-end"
	},
	flex_start: {
		justifyContent: "flex-start"
	},
	justifyText: {
		textAlign: "justify"
	},
	modal: {
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	paddingHeader: {
		paddingTop: getHeaderHeight()
	},
})