import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function TransferIcon({ primary, secondary, width, height, ...props }) {
	return (
		<View style={style.icon}>
			<Svg 
				width={width} 
				height={height} 
				viewBox="0 0 120 120" 
				fill="none" xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<Rect 
					width={width} 
					height={height} 
					rx="40" 
					fill={secondary}/>
				<Path 
					fillRule="evenodd" clipRule="evenodd" d="M81.2714 41.6415C82.1623 41.6415 82.6084 40.5644 81.9785 39.9344L75.6359 33.5919C75.2454 33.2013 75.2454 32.5682 75.6359 32.1776L77.1064 30.7071C77.497 30.3166 78.1301 30.3166 78.5207 30.7071L90.0525 42.239C90.8491 43.0356 90.8491 44.3271 90.0525 45.1237L78.5207 56.6556C78.1301 57.0461 77.497 57.0461 77.1064 56.6556L75.6359 55.1851C75.2454 54.7945 75.2454 54.1614 75.6359 53.7709L81.9785 47.4283C82.6084 46.7983 82.1623 45.7212 81.2714 45.7212H43.7339C38.1011 45.7212 33.5347 50.2875 33.5347 55.9203V61.0398C33.5347 61.5921 33.087 62.0398 32.5347 62.0398H30.4551C29.9028 62.0398 29.4551 61.5921 29.4551 61.0398V55.9203C29.4551 48.0344 35.8479 41.6415 43.7339 41.6415H81.2714ZM89.65 57.9602C90.2023 57.9602 90.65 58.4079 90.65 58.9602V64.0797C90.65 71.9656 84.2571 78.3585 76.3712 78.3585H38.8337C37.9428 78.3585 37.4966 79.4356 38.1266 80.0656L44.4692 86.4081C44.8597 86.7987 44.8597 87.4318 44.4692 87.8224L42.9986 89.2929C42.6081 89.6834 41.9749 89.6834 41.5844 89.2929L30.0525 77.761C29.2559 76.9644 29.2559 75.6729 30.0525 74.8763L41.5844 63.3444C41.9749 62.9539 42.6081 62.9539 42.9986 63.3444L44.4692 64.8149C44.8597 65.2055 44.8597 65.8386 44.4692 66.2291L38.1266 72.5717C37.4966 73.2017 37.9428 74.2788 38.8337 74.2788H76.3712C82.004 74.2788 86.5703 69.7125 86.5703 64.0797V58.9602C86.5703 58.4079 87.018 57.9602 87.5703 57.9602H89.65Z" 
					fill={primary} 
					stroke={primary}/>
			</Svg>
		</View>
	)
}

TransferIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

TransferIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default TransferIcon


export const style = StyleSheet.create({
	icon: {
		padding: 8
	},
})