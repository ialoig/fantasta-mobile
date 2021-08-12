import PropTypes from "prop-types"
import React from "react"
import { ReText } from "react-native-redash"
import { animateTextValue } from "../../utils/animationUtils"

function AnimatedText({ value, addText, style }) {

	addText = addText === null ? "" : addText 
	const animatedValue = animateTextValue(value, addText)

	return (
		<ReText 
			style={style}
			text={animatedValue}
		/>
	)
}

AnimatedText.propTypes = {
	value: PropTypes.number.isRequired,
	addText: PropTypes.string,
	style: PropTypes.object
}

export default AnimatedText

