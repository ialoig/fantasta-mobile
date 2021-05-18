import PropTypes from "prop-types"
import React from "react"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function ErrorIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.54541" width="120" height="120" rx="40" 
				fill={secondary} />
			<Path d="M91 60C91 76.5683 77.5683 90 61 90C44.4333 90 31 76.5683 31 60C31 43.4333 44.4333 30 61 30C77.5683 30 91 43.4333 91 60Z" 
				fill={primary} />
			<Path d="M50.1667 59.9999C52.4679 59.9999 54.3333 57.3882 54.3333 54.1666C54.3333 50.9449 52.4679 48.3333 50.1667 48.3333C47.8655 48.3333 46 50.9449 46 54.1666C46 57.3882 47.8655 59.9999 50.1667 59.9999Z" 
				fill={secondary} />
			<Path d="M71.8332 59.9999C74.1344 59.9999 75.9998 57.3882 75.9998 54.1666C75.9998 50.9449 74.1344 48.3333 71.8332 48.3333C69.532 48.3333 67.6665 50.9449 67.6665 54.1666C67.6665 57.3882 69.532 59.9999 71.8332 59.9999Z" 
				fill={secondary} />
			<Path d="M45.4416 76.4516C45.7383 76.72 46.1816 76.7366 46.4999 76.5C46.5649 76.4516 53.0366 71.6666 60.9999 71.6666C68.9433 71.6666 75.4366 76.4516 75.4999 76.5C75.8183 76.7366 76.2616 76.7166 76.5583 76.4516C76.8533 76.185 76.9199 75.745 76.7149 75.405C76.4999 75.0483 71.3533 66.6666 60.9999 66.6666C50.6466 66.6666 45.4983 75.0466 45.2849 75.405C45.0799 75.7466 45.1449 76.185 45.4416 76.4516Z" 
				fill={secondary} />
		</Svg>
	)
}

ErrorIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

ErrorIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 120,
	height: 120
}

export default ErrorIcon

