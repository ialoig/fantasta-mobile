import PropTypes from "prop-types"
import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { textStyles } from "../../styles"
import { button, text } from "./styles"

function Button ({ title, type, size, border, onPress }) {

	return (
		<TouchableOpacity 
			onPress={onPress} 
			style={[ button.button, button[type], button[size], border ? button.border : null ]}>
			<Text style={[ textStyles.button, text[type]]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}


Button.propTypes = {
	title: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired,
	type: PropTypes.string,
	size: PropTypes.string,
	border: PropTypes.bool,
}

Button.defaultProps = {
	type: "primary",
	size: "large",
	border: false,
}

export default Button
