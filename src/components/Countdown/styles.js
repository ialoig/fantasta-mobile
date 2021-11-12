import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"


export const style = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	timer: {
		alignItems: "center",
		backgroundColor: colors.secondary,
		justifyContent: "center",
	}
})


export const size = StyleSheet.create({
	default: {
		borderRadius: 14,
		height: dynamicHeight(327, 40),
		marginHorizontal: 4,
		width: dynamicWidth(40),
	},
	large: {
		borderRadius: 34,
		height: dynamicHeight(327, 100),
		marginHorizontal: 16,
		width: dynamicWidth(100),
	}
})


export const text = StyleSheet.create({
	default: {
		color: colors.primary,
		fontFamily: "PoppinsSemiBold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 28
	},
	large: {
		color: colors.primary,
		fontFamily: "PoppinsSemiBold",
		fontSize: 32,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75
	}
})