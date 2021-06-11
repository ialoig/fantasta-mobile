import { StyleSheet } from "react-native"
import { COLORS } from "../../styles"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const size = StyleSheet.create({
	large: {
		maxHeight: dynamicHeight(327, 80),
		maxWidth: dynamicWidth(327),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
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
		justifyContent: "center"
	},
	small: {
		//alignContent: "center",
		//justifyContent: "center"
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
	value: {
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