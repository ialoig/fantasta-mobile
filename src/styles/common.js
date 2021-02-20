
import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
		paddingTop: 56,
		paddingBottom: 32,
		paddingHorizontal: 24,
		backgroundColor: colors.background
  	},
  	content: {
		flex: 1,
    	justifyContent: 'center'
  	},
  	header: {
		alignSelf: 'center',
		marginBottom: 12,
        flexDirection: 'row'
  	},
  	buttonContainer: {
		marginTop: 12
  	},
	title: {
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center'
	},
	flex_start: {
		justifyContent: "flex-start"
	},
	justifyText: {
		textAlign: "justify"
	}
});