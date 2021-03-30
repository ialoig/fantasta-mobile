import PropTypes from "prop-types"
import React from "react"
import { TouchableOpacity, View } from "react-native"
import Icon from "../Icon/Icon"
import { button } from "./styles"

/**
 * TODO: gl - valutare se utilizzare ancora in relazione ad uso di componente Header
 * 
 */
const IconButton = ({type, icon, onPress}) => {

	return (
		<TouchableOpacity onPress={onPress} style={button[type]}>
			<View >
				{icon && <Icon name={type} />}
			</View>
		</TouchableOpacity>
	)
}


IconButton.propTypes = {
	type: PropTypes.string,
	icon: PropTypes.bool,
	onPress: PropTypes.func
}

IconButton.defaultTypes = {
	type: "default",
	icon: true
}

export default IconButton
