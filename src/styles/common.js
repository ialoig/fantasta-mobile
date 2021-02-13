
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
    	marginHorizontal: 12,
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
		marginBottom: 12
  	},
  	buttonContainer: {
		marginTop: 12,
		marginBottom: 24
  	},
	title: {
		//alignSelf: 'center',
		flexDirection: "row",
		marginTop: 56,
		marginBottom: 24
	}
});