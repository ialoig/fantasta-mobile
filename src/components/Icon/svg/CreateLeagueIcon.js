import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function CreateLeagueIcon({ primary, secondary, width, height, ...props }) {
	return (
		<View style={style.icon}>
			<Svg width={width} height={height} {...props}
				viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Rect x="0.54541" width="120" height="120" rx="40" 
					fill={secondary} />
				<Path d="M33 39.6741V54.038C33 70.2942 43.6596 84.7259 59.4616 89.8633C60.0221 90.0456 60.6281 90.0456 61.1887 89.8633C76.9865 84.7257 87.6429 70.2971 87.6429 54.0446V39.6741C87.6429 38.4893 86.842 37.4466 85.6768 37.1144L61.0993 30.107C60.8492 30.0357 60.5912 30 60.3332 30C60.0755 30 59.8177 30.0356 59.5678 30.1068L34.9667 37.1142C33.8012 37.4462 33 38.4891 33 39.6741Z" 
					fill={primary} />
				<Path d="M63.6462 47.7231C63.6462 46.0918 62.3237 44.7693 60.6923 44.7693C59.061 44.7693 57.7385 46.0918 57.7385 47.7231V56.5847H48.8769C47.2456 56.5847 45.9231 57.9072 45.9231 59.5385C45.9231 61.1699 47.2456 62.4924 48.8769 62.4924H57.7385V71.3539C57.7385 72.9853 59.061 74.3077 60.6923 74.3077C62.3237 74.3077 63.6462 72.9853 63.6462 71.3539V62.4924H72.5077C74.1391 62.4924 75.4616 61.1699 75.4616 59.5385C75.4616 57.9072 74.1391 56.5847 72.5077 56.5847H63.6462V47.7231Z" 
					fill={secondary} />
			</Svg>
		</View>
	)
}

CreateLeagueIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

CreateLeagueIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default CreateLeagueIcon


export const style = StyleSheet.create({
	icon: {
		padding: 8
	},
})