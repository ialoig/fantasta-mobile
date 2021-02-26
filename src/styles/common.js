
import { StyleSheet } from "react-native";
import { deviceScreenWidth, deviceScreenHeight } from "../utils/pixelResolver";
import colors from "./colors";

export default StyleSheet.create({
	flex: {
		flex: 1
	},
	container: {
    	flex: 1,
    	justifyContent: 'center',
    	alignContent: 'center',
		paddingTop: deviceScreenHeight * 0.06,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
		backgroundColor: colors.background
  	},
  	content: {
		flex: 1,
    	justifyContent: 'center'
  	},
  	header: {
        flexDirection: 'row',
		justifyContent: 'center',
		alignItems: "center",
		marginBottom: 12,
  	},
  	buttonContainer: {
		paddingTop: 12,
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
	flex_end: {
		justifyContent: "flex-end"
	},
	center: {
		justifyContent: "center"
	},
	justifyText: {
		textAlign: "justify"
	}
});