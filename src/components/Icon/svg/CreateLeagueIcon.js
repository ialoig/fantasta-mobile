import PropTypes from "prop-types"
import React from "react"

import Svg, { G, Mask, Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function CreateLeagueIcon({ primary, secondary, shadow, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
				<Rect width="50" height="50" rx="16" 
					fill={secondary} />
			</Mask>
			<G mask="url(#mask0)">
				<Path d="M25.5 12L36.5 15L37 16L51.5 40.5L40 50H26L14.5 29L14 16.5L19.5 14L25.5 12Z" 
					fill={shadow} />
			</G>
			<Path d="M12 15.5146V22.2177C12 29.804 16.9745 36.5387 24.3487 38.9362C24.6103 39.0213 24.8931 39.0213 25.1547 38.9362C32.527 36.5386 37.5 29.8053 37.5 22.2208V15.5146C37.5 14.9617 37.1263 14.4751 36.5825 14.3201L25.113 11.0499C24.9963 11.0166 24.8759 11 24.7555 11C24.6352 11 24.5149 11.0166 24.3983 11.0498L12.9178 14.32C12.3739 14.4749 12 14.9616 12 15.5146Z" 
				fill={primary} />
			<Path d="M26.1 19.35C26.1 18.6044 25.4956 18 24.75 18C24.0044 18 23.4 18.6044 23.4 19.35V23.4H19.35C18.6044 23.4 18 24.0044 18 24.75C18 25.4956 18.6044 26.1 19.35 26.1H23.4V30.15C23.4 30.8956 24.0044 31.5 24.75 31.5C25.4956 31.5 26.1 30.8956 26.1 30.15V26.1H30.15C30.8956 26.1 31.5 25.4956 31.5 24.75C31.5 24.0044 30.8956 23.4 30.15 23.4H26.1V19.35Z" 
				fill={secondary} />
		</Svg>
	)
}

CreateLeagueIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	shadow: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

CreateLeagueIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	shadow: colors.blueDarkShadow,
	width: 50,
	height: 50
}

export default CreateLeagueIcon

