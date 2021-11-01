import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"


export default StyleSheet.create({
	auctionBids: {
		height: dynamicHeight(327, 150),
		marginVertical: 4
	},
	badge: {
		...StyleSheet.absoluteFillObject,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingBottom: 8,
		paddingTop: 12,
		position: "relative"
	},
	button: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		position: "relative"
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		backgroundColor: colors.background,
		paddingBottom: deviceScreenHeight * 0.01,
		paddingHorizontal: deviceScreenWidth * 0.06,
	},
	countdown_container: {
		flexDirection: "row",
		justifyContent: "space-between"
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	}
})
