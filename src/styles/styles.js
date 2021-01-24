
import { StyleSheet } from "react-native";
import colors from "../styles/colors";

export default StyleSheet.create({
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
  	formContainer: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',
  	},
  	forgot: {
    	paddingTop: 12,
    	fontFamily: "PoppinsRegular",
    	fontSize: 14,
    	fontWeight: "500",
    	fontStyle: "normal",
    	lineHeight: 20,
    	letterSpacing: 0.25,
		color: colors.textPlaceholder,
  	},
  	buttonContainer: {
		paddingBottom: 24
  	}
});