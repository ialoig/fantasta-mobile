import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export const button = StyleSheet.create({
	alert: {
		backgroundColor: colors.errorRed,
	},
	border: {
		borderColor: colors.primary,
		borderStyle: "solid",
		borderWidth: 1
	},
	button: {
		borderRadius: 40,
		flex: 1,
		justifyContent: "center",
		marginTop: 12
	},
	large: {
		maxHeight: 56,
		minHeight: 56,
		width: "100%"
	},
	primary: {
		backgroundColor: colors.primary,
	},
	secondary: {
		backgroundColor: colors.white,
	},
	small: {
		minHeight: 54,
		width: "50%"
	}
})

export const text = StyleSheet.create({
	alert: {
		color: colors.white,
		textAlign: "center"
	},
	large: {
		fontSize: 20,
	},
	primary: {
		color: colors.white,
		textAlign: "center"
	},
	secondary: {
		color: colors.primary,
		textAlign: "center"
	},
	small: {
		fontSize: 12,
	}
})