import { StyleSheet } from "react-native"
import { COLORS } from "../../../styles"

export default StyleSheet.create({
	buttonStyle: {
		backgroundColor: COLORS.greyLight,
		maxHeight: 32,
		maxWidth: 32
	},
	container: {
		//flex: 1,
		flexDirection: "row",
		//justifyContent: "space-between",
		//alignContent: "center",
		//alignItems: 'center',
		paddingVertical: 12,
		//marginTop: 10,
		//height: 40
	},
	input: {
		backgroundColor: COLORS.background,
		maxHeight: 32,
		maxWidth: 32
	},
	label: {
		//fontSize: 16,
		//width: '60%'
		alignSelf: "center",
	}
})
