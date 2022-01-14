import { StyleSheet } from "react-native"
import { colors } from "../../styles"
import { deviceScreenHeight, deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, getBottomNavigationHeight } from "../../utils/pixelResolver"


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
	image: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		position: "relative"
	},
	joinButton: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "flex-end",
		marginBottom: getBottomNavigationHeight() + 30,
		position: "absolute"
	},
	opponentTurnInfo: {
		flex: 1,
		justifyContent: "space-between",
	},
	playersList: {
		marginBottom: 50,
		marginTop: 8
	},
	roles: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: getBottomNavigationHeight(),
		paddingVertical: 10
	},
	statistics: {
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between"
	},
	teamList: {
		color: colors.textPlaceholder,
		flex: 1,
		marginBottom: getBottomNavigationHeight()
	},
	textDescription: {
		color: colors.textPlaceholder,
		textAlign: "center"
	}
})
