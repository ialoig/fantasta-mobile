import PropTypes from "prop-types"
import React from "react"
import Animated, { useAnimatedStyle } from "react-native-reanimated"
import { opacityAnimation } from "../../utils/animationUtils"
import { IconType } from "./Icon"
import EmptyIcon from "./svg/EmptyIcon"


function AnimatedIcon({ name, animation, duration, delay, numOfReps, ...props }) {

	const opacityValue = animation === "opacity" ? opacityAnimation(delay, numOfReps, duration) : 1
	const IconComponent = IconType[name] || EmptyIcon

	const animStyle = useAnimatedStyle( () => {
		return {
			opacity: opacityValue.value
		}
	})

	return (
		<Animated.View style={animStyle}>
			<IconComponent {...props} />
		</Animated.View>
	)
}

AnimatedIcon.propTypes = {
	name: PropTypes.oneOf([...Object.keys(IconType)]).isRequired,
	animation: PropTypes.oneOf(["opacity"]),
	duration: PropTypes.number,
	delay: PropTypes.number,
	numOfReps: PropTypes.number
}

export default AnimatedIcon

