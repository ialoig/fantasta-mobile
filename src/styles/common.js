
import { StyleSheet } from "react-native"
import { deviceScreenHeight, deviceScreenWidth } from "../utils/deviceUtils"
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
		alignContent: "center",
		backgroundColor: colors.background,
		flex: 1,
		justifyContent: "center",
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
		paddingTop: deviceScreenHeight * 0.06
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
	header: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 12,
	},
	justifyText: {
		textAlign: "justify"
	},
	modal: {
		borderTopLeftRadius: 32,
		borderTopRightRadius: 32,
	},
	title: {
		flex: 1,
		flexGrow: 1,
		textAlign: "center"
	}
})