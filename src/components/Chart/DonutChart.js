import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Circle, G } from "react-native-svg"
import colors from "../../styles/colors"

//to be used
// https://github.com/d3/d3-shape

// react native lib based on d3:
// https://www.npmjs.com/package/react-native-svg-charts
// https://github.com/JesperLekland/react-native-svg-charts-examples#piechart



// https://github.com/nihgwu/react-native-pie

function DonutChart({ radius, strokeWidth, color, budget, budgetSpent }) {
	
	const halfCircle = radius + strokeWidth
	const circleCircumference = 2 * Math.PI * radius
	const viewBox = [0, 0, halfCircle * 2, halfCircle * 2 ]


	useEffect(() => {
		budgetSpent.sort( (a, b) => b.value - a.value)


	}, [budgetSpent])




	return (
		<View style={style.chart}>
			<Svg 
				width={radius * 2}
				height={radius * 2}
				viewBox={viewBox}
				fill="none"
			>
				<G rotation="-90" originX={halfCircle} originY={halfCircle}>
					{/* empy graph, just to show the graph also when values are not defined */}
					<Circle
						cx="50%"
						cy="50%"
						stroke={colors.grey}
						strokeWidth={strokeWidth}
						r={radius}
						fill="none"
						strokeOpacity={0.5}
						strokeDasharray={circleCircumference}
						strokeDashoffset={circleCircumference / 100}
						strokeLinecap="round"
					/>
					{
						// badget spent should be ordered by value from high to low,
						// in order to render all the percentages correcty
						budgetSpent.map((item, index) => {
							const percSpent = 100 * item.value / budget
							const strokeDashoffset = circleCircumference - (circleCircumference * percSpent) / 100
							console.log("values= [", index, "]", item.role, percSpent, "%", strokeDashoffset)
							
							return (
								<Circle
									key={index}
									cx="50%"
									cy="50%"
									stroke={colors[item.role]}
									strokeWidth={strokeWidth}
									r={radius}
									fill="none"
									strokeDasharray={circleCircumference}
									strokeDashoffset={strokeDashoffset}
									strokeLinecap="round"
								/>
							)
						})
					}
				</G>
			</Svg>
		</View>
	)
}

DonutChart.propTypes = {
	radius: PropTypes.number.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	color: PropTypes.array,
	budget: PropTypes.number.isRequired,
	budgetSpent: PropTypes.array
}

DonutChart.defaultProps = {
	radius: 70,
	strokeWidth: 10,
	color: [colors.por, colors.dif, colors.cen],
	budget: 500,
	budgetSpent: [
		{ role: "por", value: 50 },
		{ role: "dif", value: 150 },
		{ role: "cen", value: 100 },
		{ role: "att", value: 200 },
	]
}

export default DonutChart


export const style = StyleSheet.create({
	chart: {
		padding: 8
	}
})


