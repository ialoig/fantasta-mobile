import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { textStyles } from "../../styles"
import AnimatedText from "../Animation/AnimatedText"
import { MAX_WIDTH } from "./ChartUtils"

function ChartSummary({ balance, teamPlayers, maxPlayers }) {
	return (
		<View style={style.container}>
			<View style={style.balance}>
				<AnimatedText style={textStyles.chartValue}  value={balance} />
				<Text style={textStyles.chartTitle}>remaining</Text>
			</View>
			<View style={style.infoPlayers}>
				<View style={style.playersValue}>
					<AnimatedText style={textStyles.chartValue} value={teamPlayers} addText={" / "} />
					<AnimatedText style={textStyles.chartValue} value={maxPlayers} />
				</View>
				<Text style={textStyles.chartTitle}>players</Text>
			</View>
		</View>
	)
}

ChartSummary.propTypes = {
	balance: PropTypes.number,
	teamPlayers: PropTypes.number,
	maxPlayers: PropTypes.number
}

ChartSummary.defaultProps = {
	balance: 0,
	teamPlayers: 0,
	maxPlayers: 0
}

export default ChartSummary


export const style = StyleSheet.create({
	balance: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	},
	container: {
		...StyleSheet.absoluteFillObject,
		flexDirection: "row",
		position: "relative",
		width: MAX_WIDTH * 2
	},
	infoPlayers: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center"
	},
	playersValue: {
		flexDirection: "row"
	}
})

