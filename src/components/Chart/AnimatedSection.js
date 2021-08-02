import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import Animated, { 
	Easing, 
	useAnimatedProps, 
	useSharedValue, 
	withTiming } from "react-native-reanimated"
import { Path } from "react-native-svg"


const AnimatedPath = Animated.createAnimatedComponent(Path)

function AnimatedSection({ d, strokeWidth, color, value, endAngle }) {

	const progress = useSharedValue(0.1)
	const ref = useRef()
	const [length, setLength] = useState(0)
	// const [strokeDasharray, setStrokeDasharray] = useState()
	// const [strokeDashoffset, setStrokeDashoffset] = useState()

	useEffect(() => {
		// console.log("**********ref=", ref.current)
        
		const length = ref.current.getTotalLength()
		setLength(Math.abs(length))

		progress.value = withTiming(1, {
			duration: 1000,
			easing: Easing.linear
		})
		// const pathRadius = 70 - strokeWidth / 2
		// const pathLength = degreesToRadians(pathRadius) * 360
		// const strokeDasharray = Math.abs(pathLength)
		// const strokeDashoffset = strokeDasharray - value
		// setStrokeDashoffset(strokeDashoffset)
		// setStrokeDasharray(strokeDasharray)

		// console.log("strokeDasharray=", strokeDasharray, "strokeDashoffset", strokeDashoffset)
	}, [])


	// const degreesToRadians = (degrees) => {
	// 	return (degrees * Math.PI) / 180
	// }

	const animatedProps = useAnimatedProps(() => ({
		strokeDashoffset: length - length * Easing.bezier(0.61, 1, 0.88, 1)(progress.value),
	}))



	return (
		<AnimatedPath 
			ref={ref}
			d={d}
			strokeLinecap="round"
			strokeWidth={strokeWidth}
			stroke={color}
			animatedProps={animatedProps}
			strokeDasharray={length}
			// strokeDashoffset={strokeDashoffset}
		/>
	)
}

AnimatedSection.propTypes = {

}

export default AnimatedSection

