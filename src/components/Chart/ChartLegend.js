import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { ReText } from "react-native-redash"
import { textStyles } from "../../styles"
import { animateTextValue } from "../../utils/animationUtils"
import { deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"



const MAX_WIDTH = (deviceScreenWidth / 2) /** half screen */ - (deviceScreenWidth * 0.06) /** padding screen */

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
								<Text style={textStyles.graphTitle}>{item.role.toUpperCase()}</Text>
								<ChartValueLegend value={item.value} />
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
		// backgroundColor: colors.greenDisabled,
		flex: 1,
		justifyContent: "center",
		left: MAX_WIDTH,
		width: MAX_WIDTH
	},
	info: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		// backgroundColor: colors.greenDarkShadow,
		flexDirection: "row",
		paddingLeft: 8,
		paddingVertical: 2,
		position: "relative",
		width: MAX_WIDTH
	},
	roleLegend: {
		alignItems: "center",
		// backgroundColor: colors.white,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 24
	}
})


function ChartValueLegend({ value }) {

	const animatedValue = animateTextValue(value, " %")

	return (
		<ReText 
			style={textStyles.graphTitle} 
			text={animatedValue}
		/>
	)
}

ChartValueLegend.propTypes = {
	value: PropTypes.number.isRequired
}

