import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { dynamicHeight, dynamicWidth, getWidth } from "../../utils/pixelResolver"


export const card = StyleSheet.create({
	arrow: {
		alignItems: "flex-end"
	},
	card: {
		alignItems: "center",
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		flex: 1,
		//justifyContent: "center",
		marginTop: 12,
	},
	default: {
		marginHorizontal: 0,
		maxHeight: dynamicHeight(327, 180),
		maxWidth: dynamicWidth(327)
	},
	large: {
		marginHorizontal: 0,
		maxHeight: dynamicHeight(327, 160),
		maxWidth: dynamicWidth(327),
	},
	medium: {
		flexDirection: "row",
		marginHorizontal: 0,
		maxHeight: dynamicHeight(327, 120),
		maxWidth: dynamicWidth(327),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
	},
	paddingIcon: {
		padding: 8
	},
	small: {
		flexDirection: "row",
		marginHorizontal: 0,
		maxHeight: dynamicHeight(327, 80),
		maxWidth: dynamicWidth(327),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
	},
	square: {
		height: dynamicHeight(140, 140),
		justifyContent: "center",
		maxWidth: dynamicWidth(140),
	}
})


export const image = StyleSheet.create({
	default: {
        
	},
	large: {
        
	},
	medium: {
        
	},
	small: {
		paddingRight: 12
	}
})



export const text = StyleSheet.create({
	default: {
		alignItems: "center",
		paddingTop: 12
	},
	large: {
		alignItems: "center",
		paddingTop: 12
	},
	square: {
		alignItems: "center",
		paddingTop: 12
	}
})