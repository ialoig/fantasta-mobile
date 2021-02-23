
import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignContent: 'center',
    	//alignItems: 'center',
		paddingTop: 56,
		paddingBottom: 12,
		paddingHorizontal: 24,
		backgroundColor: colors.background
  	},
  	content: {
		flex: 2,
    	justifyContent: 'center'
  	},
  	header: {
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: "center",
		marginBottom: 12,
  	},
  	buttonContainer: {
		marginTop: 12,
		justifyContent: "flex-end"
  	},
	title: {
        flex: 1,
        flexGrow: 1,
        textAlign: 'center'
	},
	flex_start: {
		justifyContent: "flex-start"
	},
	justifyText: {
		textAlign: "justify"
	}
});