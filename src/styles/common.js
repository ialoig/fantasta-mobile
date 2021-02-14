
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
		paddingHorizontal: 24,
		backgroundColor: colors.background
  	},
  	content: {
		flex: 1,
		flexDirection: 'column',
    	justifyContent: 'center',
    	alignItems: 'stretch'
  	},
  	header: {
		alignSelf: 'center',
		marginTop: 56,
		marginBottom: 12,
        flexDirection: 'row'
  	},
  	buttonContainer: {
		marginTop: 12,
		marginBottom: 24
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
	}
});