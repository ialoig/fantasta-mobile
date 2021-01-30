
import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export default StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
    	marginHorizontal: 12
  	},
  	content: {
		flex: 1,
		flexDirection: 'column',
    	justifyContent: 'center',
    	alignItems: 'stretch'
  	},
  	header: {
		marginTop: 72,
		alignSelf: 'center'
  	},
  	buttonContainer: {
		paddingBottom: 24
  	}
});