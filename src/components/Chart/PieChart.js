import * as d3 from "d3-shape"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated"
import Svg, { G } from "react-native-svg"
import colors from "../../styles/colors"
import AnimatedSection from "./AnimatedSection"

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
function PieChart({ radius, strokeWidth, maxValue, budgetSpent, calculateAsPerc }) {
	
	const halfCircle = radius + strokeWidth
	const diameter = (radius + strokeWidth) * 2
	const innerRadius = radius - strokeWidth
	const viewBox = [0, 0, diameter, diameter ]

	//define pie chart values
	const [pie, setPie] = useState([])
	//define path to SVG
	const [arcs, setArcs] = useState([])

	useEffect(() => {
		if (budgetSpent && maxValue) {
			chart()
		}
	}, [budgetSpent])



	const chart = () => {
		const values = getValues()
		if (values) {
			console.log("values=", values)
		
			//create pie chart with percentages values
			const pie = d3.pie()
				.value( (d) => d.value)(values)
			console.log("pie=", pie)
			setPie(pie)
		
			//arc definition to define the correct path to draw in SVG
			const arcs = pie.map( (item) => {
				console.log("item =", item.data.role, item.value, item.startAngle)
				const arc = d3
					.arc()
					.outerRadius(radius) //radius of the pie
					.innerRadius(innerRadius) //to create a donut or a pie
					.padAngle(0.15) // angles between sections
					.cornerRadius(0.5)(item)
				console.log("arc =", arc)
				return arc
			})
			setArcs(arcs)
			console.log("arcs=", arcs)
		}
	}


	// create an array of object where are defined:
	// values : percentage value to show in chart
	// color : color of the section
	// role: role which the value is related to 
	const getValues = () => {
		//calculate totale spent as a sum of the values passed as props
		const totaleSpent = budgetSpent.reduce(
			(accumulator, currentValue) =>  accumulator + currentValue.value, 0)
		if (totaleSpent > maxValue) {
			console.error("Error while calculating total spent! Total spent cannot be bigger than Max Value")
			return null
		}

		//calculate values as percentage
		let values = budgetSpent.map((item, index) => {
			const percSpent = 100 * item.value / maxValue
			console.log("[", index, "]", item.role, percSpent, "%")
			return {
				role: item.role,
				color: colors[item.role] === undefined ? colors.grey : colors[item.role],
				value: calculateAsPerc ? percSpent : item.value
			}
		})
		//add the remaining value not spent to the array of values
		const remainingBudget = (maxValue - totaleSpent) <= 0 ? 0 : (maxValue - totaleSpent)
		if (remainingBudget > 0) {
			const percRemaining = 100 * remainingBudget / maxValue
			values.push({
				role: "rest",
				color: colors.grey,
				value: calculateAsPerc ? percRemaining : remainingBudget
			})
		}
		return values
	}


	const AnimatedG = Animated.createAnimatedComponent(G)
	const rotation = useSharedValue(0)

	rotation.value = withDelay(500, withTiming(0.5, {
		duration: 800,
		easing: Easing.bezier(0.34, 1.56, 0.64, 1) //https://easings.net
	}))

	const r = useAnimatedProps(() => ({
		transform: [
			{ 
				rotate: rotation.value
			}
		]
	}))
	

	// https://github.com/wcandillon/can-it-be-done-in-react-native/tree/master/reanimated-2/src/StrokeAnimation
	// https://github.com/wcandillon/can-it-be-done-in-react-native/blob/master/bonuses/circular-progress/components/CircularProgress2.tsx
	return (
		<View style={style.chart}>
			<Svg 
				width={radius * 2}
				height={radius * 2}
				viewBox={viewBox}
				fill="none"
			>
				<AnimatedG x={halfCircle} y={halfCircle} animatedProps={r}>
					{
						pie && pie.map((item, index) => {
							const { value, color } = item.data
							if (value === 0)
								return null


							return (
								<AnimatedSection 
									key={index}
									d={arcs[index]}
									strokeWidth={strokeWidth}
									color={color}
									value={value}
									startAngle={item.startAngle}
									endAngle={item.endAngle}
									name={item.data.role}
								/>
							)
						})
					}
				</AnimatedG>
			</Svg>
		</View>
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
	radius: 70,
	strokeWidth: 10,
	maxValue: 500,
	budgetSpent: [
		{ role: "por", value: 50 },
		{ role: "dif", value: 100 },
		{ role: "cen", value: 150 },
		{ role: "att", value: 100 },
	],
	calculateAsPerc: true
}

export default PieChart


export const style = StyleSheet.create({
	chart: {
		padding: 8,
		position: "absolute"
	}
})


