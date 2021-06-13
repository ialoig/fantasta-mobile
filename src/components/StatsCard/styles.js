import { StyleSheet } from "react-native"
import { COLORS } from "../../styles"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const size = StyleSheet.create({
	large: {
		height: dynamicHeight(327, 80),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20),
		width: dynamicWidth(327),
	},
	small: {
		maxHeight: dynamicHeight(70, 70),
		maxWidth: dynamicWidth(70),
		minHeight: dynamicHeight(70, 70),
		minWidth: dynamicWidth(70),
		paddingHorizontal: getWidth(10),
		paddingVertical: getWidth(10),
	},
})

export const style = StyleSheet.create({
	card: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: COLORS.greyLight,
		borderRadius: 24,
		marginTop: 12,
		position: "relative",
	},
	large: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center"
	},
	small: {
	},
	stat: {
		alignItems: "center",
		flex: 1
	}
})


export const text = StyleSheet.create({
	statDescription: {
		color: colors.text,
		fontFamily: "PoppinsLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "300",
		textAlign: "center"
	},
	statValue: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 30,
		textAlign: "center",
	},
})