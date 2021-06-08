import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function PlayersTabIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Path d="M21.8 13C18.7075 13 16.2 15.5051 16.2 18.5969C16.2 21.6887 18.7075 24.1937 21.8 24.1937C24.8925 24.1937 27.4 21.6887 27.4 18.5969C27.4 15.5051 24.8925 13 21.8 13Z" 
				fill={primary} />
			<Path d="M18.6 27.3906C15.5074 27.3906 13 29.8968 13 32.9898V36.9854H30.6V32.9898C30.6 29.8968 28.0926 27.3906 25 27.3906H18.6Z" 
				fill={primary} />
			<Path d="M33 29H32.2V37H37V33C37 30.7909 35.2091 29 33 29Z" 
				fill={primary} />
			<Path d="M31.4 19.4C29.1909 19.4 27.4 21.1909 27.4 23.4C27.4 25.6091 29.1909 27.4 31.4 27.4C33.6091 27.4 35.4 25.6091 35.4 23.4C35.4 21.1909 33.6091 19.4 31.4 19.4Z" 
				fill={primary} />
		</Svg>
	)
}

PlayersTabIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

PlayersTabIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default PlayersTabIcon

