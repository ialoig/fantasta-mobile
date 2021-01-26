
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
    	marginHorizontal: 12,
    	minWidth: 350
  	},
  	content: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center'
  	},
  	header: {
    	marginTop: 72
  	},
  	buttonContainer: {
		paddingBottom: 24
  	}
});