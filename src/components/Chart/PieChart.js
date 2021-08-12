import * as d3 from "d3-shape"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { ReText } from "react-native-redash"
import Svg, { G } from "react-native-svg"
import colors from "../../styles/colors"
import { animateTextValue } from "../../utils/animationUtils"
import { deviceScreenWidth } from "../../utils/deviceUtils"
import AnimatedArc from "./AnimatedArc"
import ChartLegend from "./ChartLegend"

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
 * @param {calculateAsPerc} number define if the value passed by the data must be calculate as percentage
 * @returns a PieChart
 */

const MAX_WIDTH = (deviceScreenWidth / 2) /** half screen */ - (deviceScreenWidth * 0.06) /** padding screen */

function PieChart({ radius, strokeWidth, maxValue, budgetSpent, calculateAsPerc }) {

	//check if radius passed by props is within the max size calculated
	radius = radius >= (MAX_WIDTH / 2) ? (MAX_WIDTH / 2) : radius 
	
	const halfCircle = radius + strokeWidth
	const diameter = (radius + strokeWidth) * 2
	const innerRadius = radius - strokeWidth
	const viewBox = [0, 0, diameter, diameter ]
	
	//define pie chart values
	const [pie, setPie] = useState([])
	const [values, setValues] = useState([])

	//sum of values passed by props as budget spent per roles
	const [totalSpent, setTotalSpent] = useState(0)


	useEffect(() => {
		console.log("[useEffect - PieChart] - MAX_WIDTH=", MAX_WIDTH, "radius=", radius)
		console.log("[useEffect - PieChart] - budgetSpent=", budgetSpent)

		if (budgetSpent && maxValue) {
			chart()
		}
	}, [budgetSpent])



	const chart = () => {
		calculateValues()

		if (values && values.length > 0) {
			console.log("[chart - PieChart] - values=", values)
			//create pie chart with percentages values
			const pie = d3.pie()
				.value( (d) => d.value)(values)
			setPie(pie)
		}
	}


	// create an array of object where are defined:
	// values : percentage value to show in chart
	// color : color of the section
	// role: role which the value is related to 
	const calculateValues = () => {
		//calculate totale spent as a sum of the values passed as props
		const totalSpent = budgetSpent.reduce(
			(accumulator, currentValue) =>  accumulator + currentValue.value, 0)
		console.log("[calculateValues - PieChart] - totalSpent=", totalSpent)
		setTotalSpent(totalSpent)
		

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
			return null
		}
		
		//calculate values as percentage
		let values = budgetSpent.map((item, index) => {
			const percSpent = 100 * item.value / maxValue
			console.log("[calculateValues - PieChart] - [", index, "]", item.role, percSpent, "%")
			return {
				role: item.role,
				color: colors[item.role] === undefined ? colors.grey : colors[item.role],
				value: calculateAsPerc ? percSpent : item.value
			}
		})
		console.log("[calculateValues - PieChart] - budgetSpent=", budgetSpent)
		//add the remaining value not spent to the array of values
		const remainingBudget = (maxValue - totalSpent) <= 0 ? 0 : (maxValue - totalSpent)
		if (remainingBudget > 0) {
			const percRemaining = 100 * remainingBudget / maxValue
			values.push({
				role: "rest",
				color: colors.grey,
				value: calculateAsPerc ? percRemaining : remainingBudget
			})
		}
		setValues(values)
	}


	//define spent value to render as progress animatable value 
	const animatedText = animateTextValue(totalSpent)



	const style = StyleSheet.create({
		chart: {
			alignItems: "center",
			flex: 1,
			justifyContent: "center",
			width: MAX_WIDTH
		},
		description: {
			color: colors.text,
			fontFamily: "PoppinsSemiBold",
			fontSize: radius / 6,
			fontStyle: "normal",
			fontWeight: "normal",
			height: radius / 4,
			letterSpacing: 0.75,
		},
		info: {
			...StyleSheet.absoluteFillObject,
			alignItems: "center",
			justifyContent: "center",
		},
		text: {
			color: colors.text,
			fontFamily: "PoppinsSemiBold",
			fontSize: radius / 3,
			fontStyle: "normal",
			fontWeight: "normal",
			height: radius / 2,
			justifyContent: "flex-end",
			letterSpacing: 0.75
		}
	})


	

	// https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/reanimated-2/src/StrokeAnimation
	// https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/bonuses/circular-progress/components/CircularProgress2.tsx
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
										pie={item}
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
					<ReText 
						style={style.text}
						text={animatedText}
					/>
					<Text style={style.description}>spent</Text>
				</View>	
			</View>


			{/* CHART LEGEND */}
			<ChartLegend values={values} />
		</>
	)
}

PieChart.propTypes = {
	radius: PropTypes.number.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	maxValue: PropTypes.number.isRequired,
	budgetSpent: PropTypes.array,
	calculateAsPerc: PropTypes.bool
}

PieChart.defaultProps = {
	radius: 100,
	strokeWidth: 10,
	maxValue: 500,
	budgetSpent: [
		{ role: "por", value: 0 },
		{ role: "dif", value: 0 },
		{ role: "cen", value: 0 },
		{ role: "att", value: 0 },
	],
	calculateAsPerc: true
}

export default PieChart



