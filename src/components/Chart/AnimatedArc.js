import * as d3 from "d3-shape"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import Animated, { 
	Easing, 
	Extrapolate, 
	interpolate,
	useAnimatedProps,
	useSharedValue,
	withTiming } from "react-native-reanimated"
import { Path } from "react-native-svg"


// https://github.com/callstack/reanimated-arc
const AnimatedPath = Animated.createAnimatedComponent(Path)

function AnimatedArc({ pie, radius, innerRadius, strokeWidth, color }) {

	const rotate = useSharedValue(0)

	const [arc, setArc] = useState()

	useEffect(() => {
		rotate.value = 0
		getArc()
	}, [pie])
	

	rotate.value = withTiming(1, {
		duration: 1500,
		easing: Easing.inOut(Easing.quad) //https://easings.net
	})


	const animatedProps = useAnimatedProps(() => {
		let interpolationR = interpolate(rotate.value, 
			[0, 1],
			[0, 2* Math.PI],
			Extrapolate.CLAMP
		)

		return {
			transform: [
				{ 
					rotate: interpolationR
				}
			]
		}
	})
	

	const getArc = () => {
		const arc = d3
			.arc()
			.outerRadius(radius) //radius of the pie
			.innerRadius(innerRadius) //to create a donut or a pie
			.padAngle(0.15) // angles between sections
			.startAngle(pie.startAngle)
			.endAngle(pie.endAngle)
			.cornerRadius(0.5)(pie)
		setArc(arc)

		return arc
	}

	return (
		<AnimatedPath 
			d={arc}
			strokeLinecap="round"
			strokeWidth={strokeWidth}
			stroke={color}
			animatedProps={animatedProps}
		/>
	)
}

AnimatedArc.propTypes = {
	pie: PropTypes.object.isRequired,
	radius: PropTypes.number.isRequired,
	innerRadius: PropTypes.number.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
}

export default AnimatedArc

