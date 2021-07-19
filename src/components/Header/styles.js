import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { deviceScreenWidth, getHeaderHeight } from "../../utils/deviceUtils"



export const style = StyleSheet.create({
	content: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: deviceScreenWidth * 0.04
	},
	header: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.background,
		height: getHeaderHeight(),
		left: 0,
		position: "absolute",
		right: 0,
		top: 0,
	},
	left: {
		alignItems: "flex-start",
		bottom: 0,
		justifyContent: "center",
		left: 0,
		position: "absolute",
		top: 0,
	},
	right: {
		alignItems: "flex-end",
		bottom: 0,
		justifyContent: "center",
		position: "absolute",
		right: 0,
		top: 0,
	},
	title: {
		position: "absolute"
	}
})



export const text = StyleSheet.create({
	title: {
		textAlign: "center"
	}
})