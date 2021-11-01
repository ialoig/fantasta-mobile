import PropTypes from "prop-types"
import React from "react"
import { Text } from "react-native"
import { textStyles } from "../../styles"
import colors from "../../styles/colors"
import TouchableScale from "../TouchableScale/TouchableScale"
import { badge, text } from "./styles"


function Badge({ onPress, title, active, activeColor }) {

	const bgColor = {
		backgroundColor: activeColor
	}
	
	return (
		<TouchableScale 
			onPress={onPress} 
			style={[badge.style, active ? { ...bgColor }: null]} 
		>
			<Text style={[textStyles.buttonXSmall, text.title]}>
				{title}
			</Text>
		</TouchableScale>
	)
}

Badge.propTypes = {
	onPress: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	active: PropTypes.bool,
	activeColor: PropTypes.string
}

Badge.defaultProps = {
	activeColor: colors.secondary
}

export default Badge

