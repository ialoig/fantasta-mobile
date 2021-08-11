import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Easing, useDerivedValue, useSharedValue, withTiming } from "react-native-reanimated"
import { ReText } from "react-native-redash"
import { textStyles } from "../../styles"
import colors from "../../styles/colors"
import { animatedTextValue, animateTextValue } from "../../utils/animationUtils"
import { deviceScreenWidth } from "../../utils/deviceUtils"
import { dynamicHeight, dynamicWidth } from "../../utils/pixelResolver"



const MAX_WIDTH = (deviceScreenWidth / 2) /** half screen */ - (deviceScreenWidth * 0.06) /** padding screen */


function ChartInfo({ values }) {

	
	const colorLine = (color) => {
		return <View style={[style.colorLine, { backgroundColor: color }]}></View>
	}

	return (
		<View style={style.container}>

			{
				values && values.map((item, index) => {

					console.log("item=", item)
					// if (index != 0)
					// 	return null

					return (
						<View key={index} style={style.info}>
							{
								colorLine(item.color)
							}
							<View style={style.roleLegend}>
								<Text style={textStyles.graphTitle}>{item.role.toUpperCase()}</Text>
								<ChartRoleInfo 
									percentage={item.value}
								/>
							</View>
						</View>
					)
				})
			}
		</View>
	)
}

ChartInfo.propTypes = {
	values: PropTypes.array
}

export default ChartInfo

export const style = StyleSheet.create({
	colorLine: {
		borderRadius: 8,
		height: dynamicHeight(327, 5),
		margin: 8,
		width: dynamicWidth(20),
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
		// height: dynamicHeight(327, 20),
		justifyContent: "flex-start",
		paddingBottom: 8,
		paddingLeft: 24,
		position: "relative",
		width: MAX_WIDTH
	},
	roleLegend: {
		// backgroundColor: colors.white,
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 16
	}
})

function ChartRoleInfo({ percentage }) {

	const animatedValue = animateTextValue(percentage)

	return (
		<ReText 
			style={textStyles.graphTitle} 
			text={animatedValue}
		/>
	)
}

ChartRoleInfo.propTypes = {
	percentage: PropTypes.number.isRequired
}

