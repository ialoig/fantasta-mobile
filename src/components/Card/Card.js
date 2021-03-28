import PropTypes from "prop-types"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"
import Icon from "../Icon/Icon"

import { card, image, text } from "./styles"

const Card = ({ title, description, type, icon, arrow, onPress}) => {

	let arrow_img = require("../../../assets/img/icons/forward.png")

	return (
		<TouchableOpacity onPress={onPress} style={[ card.card, card[type] ]}>
			{ icon && 
			<View style={card.paddingIcon}>
				<Icon name={icon} />
			</View> 
			}
			
			<View style={text[type]}>
				<Text style={textStyles.title}>{title}</Text>
				{description ? <Text style={textStyles.description}>{description}</Text> : null}
			</View>

			{ arrow && 
			<View style={[commonStyle.flex, card.arrow]}>
				<Image style={image.forward} source={arrow_img} />
			</View>
			}
		</TouchableOpacity>
	)
}


Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	type: PropTypes.string.isRequired,
	icon: PropTypes.string,
	arrow: PropTypes.bool,
	onPress: PropTypes.func
}

Card.defaultProps = {
	type: "default"
}


export default Card
