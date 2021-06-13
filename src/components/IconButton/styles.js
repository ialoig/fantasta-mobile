import { Platform, StyleSheet } from "react-native"
import colors from "../../styles/colors"

export const style = StyleSheet.create({
	back: {
		backgroundColor: colors.primary,
		borderRadius: 40,
		minHeight: 35,
		minWidth: 35,
	},
	container: {
		...Platform.select({
			ios: null,
			default: {
				marginVertical: 3,
				marginHorizontal: 11,
			},
		}),
	}
})
