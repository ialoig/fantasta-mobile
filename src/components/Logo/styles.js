import { StyleSheet } from "react-native"

export default StyleSheet.create({
	center: {
		alignSelf: "center",
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 24,
		position: "relative",
	},
	title:{
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 12,
		paddingVertical: 8,
		position: "relative"
	}
})