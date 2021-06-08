import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function MarketTabIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Path d="M38 25.0014C38 31.6278 32.63 37.0005 25.9997 37.0005C19.377 37.0005 14 31.6278 14 25.0014C14 18.3732 19.377 13 25.9992 13C32.63 13 38 18.3732 38 25.0014Z" 
				fill={primary} />
			<Path d="M27.05 19.55V19V18.75H26.8H26H25.75V19V19.55H24.8C23.1155 19.55 21.75 20.9155 21.75 22.6C21.75 24.2845 23.1155 25.65 24.8 25.65H28C28.9665 25.65 29.75 26.4335 29.75 27.4C29.75 28.3665 28.9665 29.15 28 29.15H24.8C23.8335 29.15 23.05 28.3665 23.05 27.4V27.15H22.8H22H21.75V27.4C21.75 29.0845 23.1155 30.45 24.8 30.45H25.75V31V31.25H26H26.8H27.05V31V30.45H28C29.6845 30.45 31.05 29.0845 31.05 27.4C31.05 25.7155 29.6845 24.35 28 24.35H24.8C23.8335 24.35 23.05 23.5665 23.05 22.6C23.05 21.6335 23.8335 20.85 24.8 20.85H28C28.9665 20.85 29.75 21.6335 29.75 22.6V22.85H30H30.8H31.05V22.6C31.05 20.9155 29.6845 19.55 28 19.55H27.05Z" 
				fill={secondary}  
				stroke={secondary}  stroke-width="0.5"/>
		</Svg>

	)
}

MarketTabIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

MarketTabIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default MarketTabIcon

