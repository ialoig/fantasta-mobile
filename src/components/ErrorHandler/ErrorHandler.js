import PropTypes from "prop-types"
import React from "react"
import { Text } from "react-native"
import Animated, { 
	Easing, 
	useAnimatedStyle, 
	useSharedValue, 
	withTiming } from "react-native-reanimated"
import { inputStyle, textStyles } from "../../styles"

const AnimatedText = Animated.createAnimatedComponent(Text)
function ErrorHandler({ error, hasError }) {

	const opacityValue = useSharedValue(0)

	const opacityStyle = useAnimatedStyle( () => {
		if (hasError) {
			opacityValue.value = withTiming(1, {
				duration: 400,
				easing: Easing.ease
			})
		} else {
			opacityValue.value = withTiming(0, {
				duration: 400,
				easing: Easing.ease
			})
		}

		return {
			opacity: opacityValue.value
		}
	})

	return (
		<AnimatedText style={[textStyles.description, inputStyle.inputError, opacityStyle]}>
			{error}
		</AnimatedText>
	)
}

ErrorHandler.propTypes = {
	hasError: PropTypes.bool,
	error: PropTypes.string
}

export default ErrorHandler

