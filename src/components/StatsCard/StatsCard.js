import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { View } from "react"
import { Pressable, Text } from "react-native"
import { size, style, text } from "./styles"

const statsCardType = ["small", "tree", "four"]

const StatsCard = ({ type, number, description }) => {

	
	return (
		<Pressable style={[style.card, size[type], style[type]]}>
			<Text style={text.value}>{number}</Text>
			<Text style={text.statDescription}>{description}</Text>

			{
				type === "large" &&
				<View>
					<Text style={text.value}>{number}</Text>
					<Text style={text.statDescription}>{description}</Text>
				</View>
			}
		</Pressable>
	)
}

StatsCard.propTypes = {
	type: PropTypes.oneOf([...Object.values(statsCardType)]).isRequired,
	number: PropTypes.number,
	description: PropTypes.string
}

export default StatsCard