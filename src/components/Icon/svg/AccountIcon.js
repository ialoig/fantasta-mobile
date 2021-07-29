import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function AccountIcon({ primary, secondary, width, height, ...props }) {

	const style = StyleSheet.create({
		icon: {
			padding: width >= 50 ? 8 : 0
		},
	})


	return (
		<View style={style.icon}>
			<Svg width={width} height={height} {...props}
				viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Rect x="0.536621" y="0.483643" width="119.008" height="119.008" rx="40" 
					fill={secondary} />
				<Path d="M59.8315 30C52.1593 30 45.9387 36.1634 45.9387 43.7702C45.9387 51.3771 52.1593 57.5405 59.8315 57.5405C67.5036 57.5405 73.7242 51.3771 73.7242 43.7702C73.7242 36.1634 67.5036 30 59.8315 30Z" 
					fill={primary} />
				<Path d="M51.8927 65.4059C44.2204 65.4059 38 71.572 38 79.1818V89.0124H81.6629V79.1818C81.6629 71.572 75.4425 65.4059 67.7702 65.4059H51.8927Z" 
					fill={primary} />
			</Svg>
		</View>
	)
}

AccountIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

AccountIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default AccountIcon
