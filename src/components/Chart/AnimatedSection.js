import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import Animated, { 
	Easing, 
	interpolate, 
	multiply, 
	useAnimatedProps, 
	useSharedValue, 
	withTiming } from "react-native-reanimated"
import { Path } from "react-native-svg"


const AnimatedPath = Animated.createAnimatedComponent(Path)

function AnimatedSection({ name, d, strokeWidth, color, value, startAngle, endAngle }) {

	const progress = useSharedValue(0)
	const ref = useRef()
	const [length, setLength] = useState(0)
	const [strokeDasharray, setStrokeDasharray] = useState()
	const [strokeDashoffset, setStrokeDashoffset] = useState()
	const [section, setSection] = useState()

	useEffect(() => {
		// console.log("**********ref=", ref.current)
        
		const length = ref.current.getTotalLength()
		console.log("** name= ", name, "// length=", length, "// value=", value)
		setLength(Math.abs(length))

		// progress.value = withTiming(1, {
		// 	duration: 3000,
		// 	easing: Easing.linear
		// })

		const circumference = 2 * Math.PI * 80
		console.log("circumference", circumference)

		const gradi = value / 100 * 360
		const lunghezzaArco = circumference * gradi / 360
		const a = (lunghezzaArco * 360) / circumference // angolo al centro
		const angleInRadians = (a * Math.PI) / 100
		console.log("angolo=", a, "// angleInRadians", angleInRadians, "// gradi=", gradi)
		console.log("lunghezzaArco", lunghezzaArco)

		const area = (lunghezzaArco * 10) / 2
		console.log("area=", area)

		setStrokeDasharray(area)
		setStrokeDashoffset((area * (value /2)) / 100)
		console.log("startAngle", startAngle, "endAngle", endAngle)
		
	}, [])


	// name=  cen // length= 236.29885864257812 // value= 30
	// circumference 502.6548245743669
	// angolo= 108 // angleInRadians 3.3929200658769765 // gradi= 108
	// lunghezzaArco 150.79644737231007
	// area= 753.9822368615503
	// startAngle 0 endAngle 1.884955592153876
	

	// const animatedProps = useAnimatedProps(() => ({
	// 	strokeDashoffset: length - length * Easing.bezier(0.61, 1, 0.88, 1)(progress.value),
	// }))


	// https://github.com/callstack/reanimated-arc
	return (
		<AnimatedPath 
			ref={ref}
			d={d}
			strokeLinecap="round"
			strokeWidth={strokeWidth}
			stroke={color}
			// animatedProps={animatedProps}
			// strokeDasharray={strokeDasharray}
			// strokeDashoffset={strokeDashoffset}
		/>
	)
}

AnimatedSection.propTypes = {

}

export default AnimatedSection

