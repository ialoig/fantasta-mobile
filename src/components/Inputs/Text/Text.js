import PropTypes from "prop-types"
import React from "react"
import { Text, TextInput, View } from "react-native"
import { inputStyle, textStyles } from "../../../styles"
import styles from "./styles"

const TextIn = (props) => {

	return (
		<View style={styles.container}>
			<TextInput
				{...props}
				style={[textStyles.body, inputStyle.inputForm, props.hasError ? inputStyle.hasError : null]}
				ref={(ref)=> { props.onRef(ref) }}
				keyboardType='default'
				autoCorrect={false}
			/>
			{ props.hasError ? <Text style={[textStyles.description, inputStyle.inputError]}>{props.error}</Text> : null }
		</View>
	)
}

export default TextIn


TextIn.propTypes = {
	hasError: PropTypes.bool,
	error: PropTypes.string,
	onRef: PropTypes.func
}
