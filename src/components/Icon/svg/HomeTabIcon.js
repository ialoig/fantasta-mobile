import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function HomeTabIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Path d="M25.5206 13.1926C25.221 12.9358 24.779 12.9358 24.4794 13.1926L13 23.0321V34.6C13 35.9255 14.0745 37 15.4 37H21.8C22.2418 37 22.6 36.6418 22.6 36.2V31.4C22.6 30.0745 23.6745 29 25 29C26.3255 29 27.4 30.0745 27.4 31.4V36.2C27.4 36.6418 27.7582 37 28.2 37H34.6C35.9255 37 37 35.9255 37 34.6V23.0321L25.5206 13.1926Z" 
				fill={primary} />
		</Svg>
	)
}

HomeTabIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

HomeTabIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default HomeTabIcon

