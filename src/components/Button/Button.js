import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { textStyles } from "../../styles"
import { button, text } from "./styles"

const Button = (props) => {

	const { type, size, border } = props

	return (
		<TouchableOpacity onPress={props.onPress} style={[ button.button, button[type], button[size], border ? button.border : null ]}>
			<Text style={[ textStyles.button, text[type]]}>{props.title}</Text>
		</TouchableOpacity>
	)
}

export default Button
