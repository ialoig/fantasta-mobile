import PropTypes from "prop-types"
import React from "react"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function ErrorIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" fill="#000000" />
			<Path fill-rule="evenodd" clip-rule="evenodd" d="M16.5392 23.6642C15.7582 22.8832 14.4918 22.8832 13.7108 23.6642L13.4142 23.9608C12.6332 24.7418 12.6332 26.0082 13.4142 26.7892L19.9608 33.3358C20.7418 34.1168 22.0082 34.1168 22.7892 33.3358L35.5858 20.5392C36.3668 19.7582 36.3668 18.4918 35.5858 17.7108L35.2892 17.4142C34.5082 16.6332 33.2418 16.6332 32.4608 17.4142L22.7892 27.0858C22.0082 27.8668 20.7418 27.8668 19.9608 27.0858L16.5392 23.6642Z" fill="#CF2835" />
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

