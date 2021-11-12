import { StyleSheet } from "react-native"
import colors from "../../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../../utils/pixelResolver"


export const style = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: colors.greyLight,
		position: "relative"
	},
	info: {
		flex: 1
	},
	infoTeam: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})


export const size = StyleSheet.create({
	default: {
		borderRadius: 18,
		height: dynamicHeight(327, 40),
		marginVertical: 4,
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327),
	},
	large: {
		borderRadius: 24,
		height: dynamicHeight(327, 80),
		marginVertical: 8,
		paddingHorizontal: getWidth(20),
		width: dynamicWidth(327),
	}
})


export const card =  StyleSheet.create({
	// eslint-disable-next-line react-native/no-color-literals
	highlight: {
		borderColor: "rgba(31, 204, 121, 0.5)",
		borderWidth: 3,
	},
	style: {
		alignItems: "center",
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "center"
	}
})
