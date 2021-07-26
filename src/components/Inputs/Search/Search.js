
import React from "react"
import { Text, TextInput, View } from "react-native"
import { inputStyle, textStyles } from "../../../styles"
import styles from "./styles"

const Search = (props) => {

	return (
		<View >
			<TextInput
				{...props}
				style={[textStyles.body, styles.inputForm, props.hasError ? inputStyle.hasError : null]}
				ref={(ref)=> { props.onRef(ref) }}
				keyboardType='default'
				autoCorrect={false}
			/>
			{ props.hasError ? <Text style={[textStyles.description, inputStyle.inputError]}>{props.error}</Text> : null }
		</View>
	)
}

export default Search
