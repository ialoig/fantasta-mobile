import PropTypes from "prop-types"
import React from "react"

import Svg, { Path } from "react-native-svg"
import colors from "../../../styles/colors"

function ForwardIcon({primary, width, height, ...props}) {
	return (
		<Svg width={width} height={height} 
			viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Path d="M9.15137 5.01855L15.5988 11.4659L9.15137 17.9133" 
				stroke={primary} 
				stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
		</Svg>
	)
}

ForwardIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

ForwardIcon.defaultProps = {
	primary: colors.secondary,
	width: 24,
	height: 23
}

export default ForwardIcon

