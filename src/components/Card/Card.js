import PropTypes from "prop-types"
import React from "react"
import { Pressable, Text, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"
import Icon from "../Icon/Icon"
import { size, style } from "./styles"

function Card({ title, description, type, icon, arrow, onPress, ...props }) {

	return (
		<Pressable onPress={onPress} style={[style.card, size[type], style[type]]}>
			{ icon &&
				<Icon name={icon} {...props}/>
			}

			<View >
				<Text style={textStyles.title}>{title}</Text>
				{description ? <Text style={textStyles.description}>{description}</Text> : null}
			</View>

			{ arrow &&
				<View style={[commonStyle.flex, style.arrow]}>
					<Icon name="forward" />
				</View>
			}
		</Pressable>
	)
}


Card.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	type: PropTypes.oneOf(["default", "small", "medium", "large", "square"]).isRequired,
	icon: PropTypes.string,
	arrow: PropTypes.bool,
	onPress: PropTypes.func
}

Card.defaultProps = {
	title: "",
	type: "default"
}


export default Card
