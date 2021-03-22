import { StyleSheet } from "react-native"

import colors from "./colors"

export default StyleSheet.create({
	body: {
		fontFamily: "PoppinsRegular",
		fontSize: 16,
		fontWeight: "normal",
		fontStyle: "normal",
		//lineHeight: 28,
		letterSpacing: 0.75,
		color: colors.text
	},
	button: {
		color: colors.text,
		fontFamily: "PoppinsRegular",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		letterSpacing: 0.75,
		lineHeight: 28
	},
	buttonXSmall: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 13,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 20
	},
	description: {
		color: colors.textPlaceholder,
		fontFamily: "PoppinsRegular",
		fontSize: 12,
		fontStyle: "normal",
		fontWeight: "normal",
		letterSpacing: 0.75,
		lineHeight: 15,
		marginTop: 4
	},
	graphTitle: {
		color: colors.text,
		fontFamily: "PoppinsMedium",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0
	},
	h1: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 20,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 30
	},
	h2: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 30
	},
	h3: {
		color: colors.text,
		fontFamily: "PoppinsMedium",
		fontSize: 14,
		fontStyle: "normal",
		fontWeight: "500",
		letterSpacing: 0.25,
		lineHeight: 20,
		marginTop: 4
	},
	p1: {
		color: colors.text,
		fontFamily: "PoppinsLight",
		fontSize: 10,
		fontStyle: "normal",
		fontWeight: "300",
		letterSpacing: 0
	},
	title: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "600",
		letterSpacing: 0.75,
		lineHeight: 28
	}
})