
import React from "react"
import { Text, View } from "react-native"
import InputSpinner from "react-native-input-spinner"
import { COLORS, commonStyle, textStyles } from "../../../styles"

import styles from "./styles"

const NumberInc = (props) => {

	return (
		<View style={styles.container}>
			<Text style={[textStyles.body, styles.label, commonStyle.flex_start]}>
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
				buttonTextColor={COLORS.text}
				textColor={COLORS.text}
				inputStyle={styles.input}
				buttonStyle={styles.buttonStyle}
				style={commonStyle.flex_end}
				fontSize={16}
				buttonFontSize={16}
			/>
		</View>
	)
}

export default NumberInc
