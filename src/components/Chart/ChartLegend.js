import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { textStyles } from "../../styles"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"
import AnimatedText from "../Animation/AnimatedText"
import { MAX_WIDTH } from "./ChartUtils"


function ChartLegend({ values }) {


	const colorLine = (color) => {
		return <View style={[style.colorLine, { backgroundColor: color }]}></View>
	}

	return (
		<View style={style.container}>

			{
				values && values.map((item, index) => {

					return (
						<View key={index} style={style.info}>
							{ colorLine(item.color) }
							<View style={style.roleLegend}>
								<Text style={textStyles.chartTitle}>{item.role.toUpperCase()}</Text>
								<AnimatedText style={textStyles.chartTitle} value={item.value} addText={" %"} />
							</View>
						</View>
					)
				})
			}
		</View>
	)
}

ChartLegend.propTypes = {
	values: PropTypes.array
}

export default ChartLegend

export const style = StyleSheet.create({
	colorLine: {
		borderRadius: 8,
		height: dynamicHeight(327, 5),
		margin: 8,
		width: dynamicWidth(24),
	},
	container: {
		...StyleSheet.absoluteFillObject,
		alignContent: "center",
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		left: MAX_WIDTH,
		width: MAX_WIDTH
	},
	info: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		flexDirection: "row",
		paddingLeft: 8,
		paddingVertical: 2,
		position: "relative",
		width: MAX_WIDTH
	},
	roleLegend: {
		alignItems: "center",
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 24
	}
})



