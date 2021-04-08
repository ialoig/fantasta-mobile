import { StyleSheet } from "react-native"
import colors from "../../styles/colors"
import { getHeight, getWidth } from "../../utils/pixelResolver"


export const card = StyleSheet.create({
	arrow: {
		alignItems: "flex-end"
	},
	card: {
		alignItems: "center",
		backgroundColor: colors.greyLight,
		borderRadius: 24,
		flex: 1,
		justifyContent: "center",
		marginTop: 12,
	},
	default: {
		marginHorizontal: 0,
		maxHeight: getHeight(180)
	},
	large: {
		marginHorizontal: 0,
		maxHeight: getHeight(160)
	},
	medium: {
		flexDirection: "row",
		marginHorizontal: 0,
		maxHeight: getHeight(120),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
	},
	paddingIcon: {
		padding: 4
	},
	small: {
		flexDirection: "row",
		marginHorizontal: 0,
		maxHeight: getHeight(100),
		paddingHorizontal: getWidth(20),
		paddingVertical: getWidth(20)
	},
	square: {
		height: getHeight(180),
		maxWidth: getWidth(150),
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