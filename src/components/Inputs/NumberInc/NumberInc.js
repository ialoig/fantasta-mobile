
import React from "react"
import { Text, View } from "react-native"
import InputSpinner from "react-native-input-spinner"
import { textStyles } from "../../../styles"
import colors from "../../../styles/colors"

import styles from "./styles"

const NumberInc = (props) => {

	return (
		<View style={styles.container}>
			<Text style={[textStyles.body, styles.label]}>
				{props.label}
			</Text>
			<InputSpinner
				value={props.value}
				append={<Text style={{width: 5}}></Text>}
				prepend={<Text style={{width: 5}}></Text>}
				step={props.step}
				min={props.min}
				max={props.max}
				onChange={props.onChange}
				height={32}
				width={120}
				colorPress={colors.primary}
				buttonStyle={styles.buttonStyle}
				buttonTextColor={colors.text}
				inputStyle={textStyles.body}
			/>
		</View>
	)
}

export default NumberInc
