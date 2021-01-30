
import { StyleSheet } from "react-native";

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
		alignSelf: 'center',
		marginTop: 56,
		marginBottom: 12
  	},
  	buttonContainer: {
		marginTop: 12,
		marginBottom: 24
  	}
});