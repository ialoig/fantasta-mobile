import PropTypes from "prop-types"
import React from "react"

import Svg, { Path } from "react-native-svg"
import colors from "../../../styles/colors"

function BackIcon({primary, width, height, ...props}) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 -6.84959e-07 27.165 -1.5299e-06 17.5C-2.37484e-06 7.83502 7.83501 2.37484e-06 17.5 1.5299e-06C27.165 6.84959e-07 35 7.83502 35 17.5Z" 
				fill={primary}
			/>
			<Path d="M20.1667 22.7593L15.6536 18.2461L20.1667 13.7329" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
			/>
		</Svg>
	)
}

BackIcon.propTypes = {
	primary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

BackIcon.defaultProps = {
	primary: colors.primary,
	width: 35,
	height: 35
}

export default BackIcon

