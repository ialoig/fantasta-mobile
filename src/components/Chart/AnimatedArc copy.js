import { interpolatePath } from "d3-interpolate-path"
import * as d3 from "d3-shape"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import Animated, { add, concat, cond, cos, Easing, Extrapolate, interpolate, lessOrEq, multiply, sin, sub, useAnimatedProps, useAnimatedRef, useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming } from "react-native-reanimated"
import { Path } from "react-native-svg"

const AnimatedPath = Animated.createAnimatedComponent(Path)

function AnimatedArc({ pie, radius, innerRadius, strokeWidth, color }) {

	const progress = useSharedValue(0)
	const rotate = useSharedValue(0)
	const angle = useSharedValue(0)
	const ref = useRef()

	const [arc, setArc] = useState()
	const [length, setLength] = useState()
	const [endArc, setEndArc] = useState()

	useEffect(() => {
		progress.value = withTiming(1, {
			duration: 1000,
			easing: Easing.ease //https://easings.net
		})

		// getArc()
		// animatedPath()
		// console.log("ref", ref.current.getTotalLength())
		// setLength(ref.current.getTotalLength())
		

	}, [])
	
	
	
	const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
		// var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0
		const valueX = add(centerX, multiply(radius, cos(angleInDegrees)))
		const valueY = add(centerY, multiply(radius, sin(angleInDegrees)))
		
		return {
			x: valueX,
			y: valueY
		}
	}
	
	const describeArc = (x, y, radius, startAngle, endAngle) => {

		var start = polarToCartesian(x, y, radius, endAngle)
		var end = polarToCartesian(x, y, radius, startAngle)

		var largeArcFlag = cond(lessOrEq(sub(endAngle, startAngle), 180), 0, 1)

		// var d = [
		// 	"M", start.x, start.y,
		// 	"A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
		// ].join(" ")
	
		const d = `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`

		console.log("describeArc=", d)
		return d
	}

	const animatedString = (strings, ...values) => {
		const arr = []
		const n = values.length
		for (let i = 0; i < n; i++) {
			arr.push(strings[i], values[i])
		}
		const end = strings[n]
		if (end) {
			arr.push(end)
		}
		//@ts-ignore
		return concat(...arr)
	}

	
	const animatedPath = () => {
		
		angle.value = interpolate(progress.value, 
			[0, 1],
			[pie.startAngle, pie.endAngle],
			Extrapolate.CLAMP
		)
		console.log("angle=", angle.value)
		const path = describeArc(0, 0, radius, pie.startAngle, angle.value)
		return path 
	}



	// const animatedProps = useAnimatedProps(() => {
	// 	let interpolationR = interpolate(rotate.value, 
	// 		[0, 1],
	// 		[0, 2* Math.PI],
	// 		Extrapolate.CLAMP
	// 	)

	// 	return {
	// 		strokeDashoffset: length - length * Easing.bezier(0.37, 0, 0.63, 1)(progress.value),
	// 		transform: [
	// 			{ 
	// 				rotate: interpolationR
	// 			}
	// 		]
	// 	}
	// })
	
	// const calculatePath = () => {
	// 	console.log("calculatePath - startAngle", pie.startAngle, "endAngle", pie.endAngle)
		
	// 	const startArc = d3
	// 		.arc()
	// 		.outerRadius(radius) //radius of the pie
	// 		.innerRadius(innerRadius) //to create a donut or a pie
	// 		.padAngle(0.15) // angles between sections
	// 		.startAngle(pie.startAngle)
	// 		.endAngle(pie.startAngle)
	// 		.cornerRadius(0.5)(pie)
	
	// 	const arcEnd = d3
	// 		.arc()
	// 		.outerRadius(radius) //radius of the pie
	// 		.innerRadius(innerRadius) //to create a donut or a pie
	// 		.padAngle(0.15) // angles between sections
	// 		.startAngle(pie.startAngle)
	// 		.endAngle(pie.endAngle)
	// 		.cornerRadius(0.5)(pie)

	// 	console.log("getArc - arcStart =", startArc)
	// 	console.log("getArc - arcEnd =", arcEnd)

	// 	const arcInterpolated = interpolatePath(startArc, arcEnd)
	// 	console.log("getArc - arcInterpolated =", arcInterpolated(0))
	// 	console.log("getArc - arcInterpolated =", arcInterpolated(1))

	// 	setStartArc(arcInterpolated(0))
	// 	setEndArc(arcInterpolated(1))
	// 	setArc(arcEnd)
		

	// 	return {
	// 		start: arcInterpolated(0),
	// 		end: arcInterpolated(1)
	// 	}
	// }
	

	const getArc = () => {
		// console.log("getArc - pie =", pie)
			
		const arc = d3
			.arc()
			.outerRadius(radius) //radius of the pie
			.innerRadius(innerRadius) //to create a donut or a pie
			.padAngle(0.15) // angles between sections
			.startAngle(pie.startAngle)
			.endAngle(pie.endAngle)
			.cornerRadius(0.5)(pie)
		setArc(arc)

		console.log("getArc - arc =", arc)
		return arc
	}



	rotate.value = withTiming(1, {
		duration: 1500,
		easing: Easing.inOut(Easing.quad) //https://easings.net
	})



	return (
		<AnimatedPath 
			ref={ref}
			d={animatedPath()}
			strokeLinecap="round"
			strokeWidth={strokeWidth}
			stroke={color}
			// animatedProps={animatedPath}
			// strokeDasharray={length}
		/>
	)
}

AnimatedArc.propTypes = {

}

export default AnimatedArc

