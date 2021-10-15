import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import Icon from "../../Icon/Icon"
import { size, style, text } from "./styles"

const statsCardType = ["small", "large", "four"]

const StatsCard = ({ type, values, descriptions }) => {

	const renderStat = (value, index) => {
		return (
			<View style={style.stat} key={index}>
				<View style={style.separator} >
					{ (index > 0) && (value != null) && <Icon name="separator" horizontal={false} /> }
				</View>
				<Text style={text.statValue}>{value}</Text>
				<Text style={text.statDescription}>{descriptions[index]}</Text>
			</View>
		)
	}

	return (
		<View style={[style.card, size[type], style[type]]}>
			{
				(values.length > 0) && 
				(descriptions.length > 0) && 
				(values.length === descriptions.length) &&
				values.map(renderStat)
			}

		</View>
	)
}

StatsCard.propTypes = {
	type: PropTypes.oneOf([...Object.values(statsCardType)]).isRequired,
	values: PropTypes.array.isRequired,
	descriptions: PropTypes.array.isRequired,
}

export default StatsCard