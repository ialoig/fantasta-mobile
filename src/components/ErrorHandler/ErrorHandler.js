import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import { Animated } from "react-native"
import { inputStyle, textStyles } from "../../styles"

function ErrorHandler({ error, hasError }) {

	const fadeAnim = useRef(new Animated.Value(0)).current

	//when component is mounted check if there is an error ...
	//... if yes opacity is set to 1 trough animation ...
	//... if not opacity is set to 0 (aka not visible)
	useEffect( () => {
		if (hasError) {
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 400,
				useNativeDriver: true
			}).start()
		} else {
			Animated.timing(fadeAnim, {
				toValue: 0,
				duration: 400,
				useNativeDriver: true
			}).start()
		}
	})


	return (
		<Animated.Text style={[textStyles.description, inputStyle.inputError, 
			{
				opacity: fadeAnim
			}
		]}>
			{error}
		</Animated.Text>
	)
}

ErrorHandler.propTypes = {
	hasError: PropTypes.bool,
	error: PropTypes.string
}

export default ErrorHandler

