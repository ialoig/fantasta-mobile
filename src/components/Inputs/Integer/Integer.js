import PropTypes from "prop-types"
import React from "react"
import { Text, TextInput, View } from "react-native"
import inputStyles from "../../../styles/inputs"

const Integer = (props) => {

	return (
		<View style={inputStyles.inptView}>
			<TextInput
				{...props}
				style={[inputStyles.inputForm, props.hasError ? inputStyles.hasError : null]}
				ref={(ref)=> { props.onRef(ref) }}
				keyboardType='numeric'
			/>
			{ props.hasError ? <Text style={inputStyles.inputError}>{props.error}</Text> : null }
		</View>
	)
}

export default Integer

Integer.propTypes = {
	hasError: PropTypes.bool,
	error: PropTypes.string,
	onRef: PropTypes.func
}
