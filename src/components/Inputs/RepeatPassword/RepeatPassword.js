import PropTypes from "prop-types"
import React from "react"
import { TextInput, View } from "react-native"
import { inputStyle, textStyles } from "../../../styles"
import ErrorHandler from "../../ErrorHandler/ErrorHandler"


const RepeatPassword = (props) => {

	return (
		<View style={inputStyle.container}>
			<TextInput
				{...props}
				style={[textStyles.body, inputStyle.inputForm, props.hasError ? inputStyle.hasError : null]}
				ref={(ref)=> { props.onRef(ref) }}
				keyboardType='default'
				secureTextEntry={true}
			/>
			<ErrorHandler {...props} />
		</View>
	)
}

export default RepeatPassword

RepeatPassword.propTypes = {
	hasError: PropTypes.bool,
	onRef: PropTypes.func
}
