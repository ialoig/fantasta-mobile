import * as d3 from "d3-shape"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import Svg, { G } from "react-native-svg"
import { textStyles } from "../../styles"
import colors from "../../styles/colors"
import AnimatedText from "../Animation/AnimatedText"
import AnimatedArc from "./AnimatedArc"
import ChartLegend from "./ChartLegend"
import { MAX_WIDTH } from "./ChartUtils"

/**
 *  references:
 *  - d3-shape docs
 *  https://github.com/d3/d3-shape
 *  - react native lib based on d3:
 *  https://www.npmjs.com/package/react-native-svg-charts
 * 
 * 
 * @param {radius} number the radius value of the chart 
 * @param {strokeWidth} number is the size width of the chart 
 * @param {maxValue} number represent the max value of the chart
 * @param {budgetSpent} object data value to be represented
 * @param {totalSpent} number sum of values calculated from budgetSpent
 * @param {calculateAsPerc} number define if the value passed by the data must be calculate as percentage
 * @returns a PieChart
 */

function PieChart({ radius, strokeWidth, maxValue, budgetSpent, totalSpent, calculateAsPerc }) {

	//check if radius passed by props is within the max size calculated
	radius = radius >= (MAX_WIDTH / 2) ? (MAX_WIDTH / 2) : radius 
	
	const halfCircle = radius + strokeWidth
	const diameter = (radius + strokeWidth) * 2
	const innerRadius = radius - strokeWidth
	const viewBox = [0, 0, diameter, diameter ]
	
	//define pie chart values
	const [pie, setPie] = useState([])
	const [values, setValues] = useState([])


	useEffect(() => {
		console.log("[PieChart - useEffect] - creating chart with budgetSpent=", budgetSpent)
		// if (budgetSpent && maxValue) {
		
		chart()
		// }
	}, [budgetSpent, maxValue])



	const chart = () => {
		const values = calculateValues()
		console.log("[PieChart - chart] - Pie creating with values=", values)
		if (values && values.length > 0) {
			//create pie chart with percentages values
			const pie = d3.pie()
				.value( (d) => d.value)(values)
			setPie(pie)
			console.log("[PieChart - chart] - Pie created with values")
		}
	}


	// create an array of object where are defined:
	// values : percentage value to show in chart
	// color : color of the section
	// role: role which the value is related to 
	const calculateValues = () => {
		
		console.log("[PieChart - calculateValues] - totalSpent=", totalSpent)
		if (totalSpent > maxValue) {
			console.error("Error while calculating total spent! Total spent cannot be bigger than Max Value")
			const values = [
				{
					role: "rest",
					color: colors.grey,
					value: 100
				}
			]
			setValues(values)
			return values
		}
		
		//calculate values as percentage
		let values = budgetSpent.map((item, index) => {
			const percSpent = Math.round(100 * item.value / maxValue)
			console.log("[PieChart - calculateValues] - [", index, "]", item.role, ",", percSpent, "%")
			return {
				role: item.role,
				color: colors[item.role] === undefined ? colors.grey : colors[item.role],
				value: calculateAsPerc ? percSpent : item.value
			}
		})
		//add the remaining value not spent to the array of values
		const remainingBudget = (maxValue - totalSpent) <= 0 ? 0 : (maxValue - totalSpent)
		if (remainingBudget > 0) {
			const percRemaining = Math.round(100 * remainingBudget / maxValue)
			values.push({
				role: "rest",
				color: colors.grey,
				value: calculateAsPerc ? percRemaining : remainingBudget
			})
		}
		setValues(values)
		return values
	}

	const animatedTextStyle = 
	{
		fontSize: radius / 3,
		height: radius / 2,
	}


	return (
		<>
			<View style={style.chart}>
				<Svg 
					width={radius * 2}
					height={radius * 2}
					viewBox={viewBox}
					fill="none"
				>
					<G x={halfCircle} y={halfCircle} >
						{
							pie && pie.map((item, index) => {
								const { value, color } = item.data
								if (value === 0)
									return null

								return (
									<AnimatedArc 
										key={index}
										value={item}
										radius={radius}
										innerRadius={innerRadius}
										strokeWidth={strokeWidth}
										color={color}
									/>
								)
							})
						}
					</G>
				</Svg>
				<View style={style.info}>
					<AnimatedText value={totalSpent} style={[style.text, animatedTextStyle]}/>
					<Text style={textStyles.chartTitle}>spent</Text>
				</View>	

				{/* CHART LEGEND */}
				<ChartLegend values={values} />
			</View>


		</>
	)
}

PieChart.propTypes = {
	radius: PropTypes.number.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
	budgetSpent: PropTypes.array,
	totalSpent: PropTypes.number.isRequired,
	calculateAsPerc: PropTypes.bool
}

PieChart.defaultProps = {
	radius: 80,
	strokeWidth: 10,
	maxValue: 500,
	budgetSpent: [
		{ role: "por", value: 0 },
		{ role: "dif", value: 0 },
		{ role: "cen", value: 0 },
		{ role: "att", value: 0 },
	],
	totalSpent: 0,
	calculateAsPerc: true
}

export default PieChart



const style = StyleSheet.create({
	chart: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
		width: MAX_WIDTH
	},
	info: {
		...StyleSheet.absoluteFillObject,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: colors.text,
		fontFamily: "PoppinsSemiBold",
		fontStyle: "normal",
		fontWeight: "normal",
		justifyContent: "flex-end",
		letterSpacing: 0.75
	}
})