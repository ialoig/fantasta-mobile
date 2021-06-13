import I18n from "i18n-js"
import PropTypes from "prop-types"
import React from "react"
import { Text, View } from "react-native"
import { textStyles } from "../../styles"
import IconButton from "../IconButton/IconButton"
import { style, text } from "./styles"


/**
 * TODO: gl - valutare se ancora necessario. Viene usato solo nelle pagine gestite come slide.
 */
function Header (props) {

	const { 
		title, 
		leftButton, 
		onPressLeft, 
		rightButton, 
		onPressRight, 
		iconTypeLeft,
		iconTypeRight 
	} = props
    
	return (
		<View style={style.header}>
			<View style={style.content}>
				{
					leftButton && 
					<View style={style.left}>
						<IconButton onPress={onPressLeft} icon type={iconTypeLeft}/>
					</View>
				
				}

				<View style={style.title}>
					<Text style={[textStyles.h1, text.title]}>{I18n.translate(title)}</Text>
				</View>
			
				{
					rightButton && 
					<View style={style.right}>
						<IconButton onPress={onPressRight} icon type={iconTypeRight}/>
					</View>
				}
			</View>
		</View>         
	)
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	leftButton: PropTypes.bool,
	onPressLeft: PropTypes.func,
	rightButton: PropTypes.bool,
	onPressRight: PropTypes.func,
	iconTypeLeft: PropTypes.string,
	iconTypeRight: PropTypes.string
}

Header.defaultTypes = {
	leftButton: false,
	rightButton: false
}

export default Header
