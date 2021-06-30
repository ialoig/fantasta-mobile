import PropTypes from "prop-types"
import React from "react"
import Icon from "../Icon/Icon"
import TouchableScale from "../TouchableScale/TouchableScale"
import { style } from "./styles"

/**
 * TODO: gl - valutare se utilizzare ancora in relazione ad uso di componente Header
 * 
 */
const IconButton = ({ type, icon, onPress, ...props }) => {

	return (
		<TouchableScale onPress={onPress} style={[style.container, style[type]]}>
			{ 
				icon && 
				<Icon name={type} {...props} />
			}
		</TouchableScale>
	)
}


IconButton.propTypes = {
	type: PropTypes.string,
	icon: PropTypes.bool,
	onPress: PropTypes.func
}

IconButton.defaultTypes = {
	type: "back",
	icon: true
}

export default IconButton
