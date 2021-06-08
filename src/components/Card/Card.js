import PropTypes from "prop-types"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"
import Icon from "../Icon/Icon"

import { style, text } from "./styles"

const Card = ({ title, description, type, icon, arrow, onPress, ...props }) => {

	return (
		<TouchableOpacity onPress={onPress} style={[style.card, style[type]]}>
			{ icon &&
				<View style={style.paddingIcon}>
					<Icon name={icon} {...props}/>
				</View>
			}

			<View style={text[type]}>
				<Text style={textStyles.title}>{title}</Text>
				{description ? <Text style={textStyles.description}>{description}</Text> : null}
			</View>

			{ arrow &&
				<View style={[commonStyle.flex, style.arrow]}>
					<Icon name="forward" />
				</View>
			}
		</TouchableOpacity>
	)
}


Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.string.isRequired,
	icon: PropTypes.string,
	arrow: PropTypes.bool,
	onPress: PropTypes.func
}

Card.defaultProps = {
	title: "",
	type: "default"
}


export default Card
