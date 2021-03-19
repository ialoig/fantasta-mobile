import { StyleSheet } from "react-native"

export default StyleSheet.create({
	cardContent: {
		flex: 1,
	},
	header: {
		flexDirection: "row",
		marginBottom: 12,
		marginHorizontal: 24,
		marginTop: 56,
	},
	title: {
		flex: 1,
		flexGrow: 1,
		justifyContent: "center",
		textAlign: "center",
		textAlignVertical: "center"
	},
	version: {
		paddingVertical: 12,
		textAlign: "center"
	}
})