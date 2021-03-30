import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { commonStyle, textStyles } from "../../styles"
import IconButton from "../IconButton/IconButton"


/**
 * TODO: gl - valutare se ancora necessario. Viene usato solo nelle pagine gestite come slide.
 */
function Header (props) {

	const { title, backButton, onPressBack, rightButton, onPressRight, iconTypeBack, iconTypeRight } = props
    
	return (            
		<View style={commonStyle.header}>
			{backButton && <IconButton onPress={onPressBack} icon={true} type={iconTypeBack}/>}
			<Text style={[textStyles.h1, commonStyle.title]}>{I18n.translate(title)}</Text>
			{rightButton && <IconButton onPress={onPressRight} icon={true} type={iconTypeRight}/>}
		</View>
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	backButton: PropTypes.bool,
	onPressBack: PropTypes.func,
	rightButton: PropTypes.bool,
	onPressRight: PropTypes.func,
	iconTypeBack: PropTypes.string,
	iconTypeRight: PropTypes.string
}

Header.defaultTypes = {
	backButton: false,
	rightButton: false
}

export default Header
