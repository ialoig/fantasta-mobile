import PropTypes from "prop-types"
import React from "react"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function SendIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.54541" width="120" height="120" rx="40" 
				fill={secondary} />
			<Path d="M90.8162 32.8392C90.72 33.0474 90.5861 33.2425 90.4144 33.4142L52.603 71.2257L63.285 89.029C63.6714 89.673 64.3861 90.0462 65.1354 89.9954C65.8847 89.9445 66.5424 89.4781 66.8383 88.7878L90.8162 32.8392Z" 
				fill={primary} />
			<Path d="M49.7746 68.3972L31.971 57.715C31.327 57.3286 30.9538 56.6139 31.0046 55.8646C31.0555 55.1153 31.5218 54.4576 32.2122 54.1617L88.1719 30.179C87.9596 30.2755 87.7607 30.4111 87.586 30.5858L49.7746 68.3972Z" 
				fill={primary} />
		</Svg>
	)
}

SendIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

SendIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 120,
	height: 120
}

export default SendIcon

