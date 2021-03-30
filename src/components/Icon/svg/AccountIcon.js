import PropTypes from "prop-types"
import React from "react"

import Svg, { G, Mask, Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function AccountIcon({primary, secondary, shadow, width, height, ...props}) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
				<Rect width="50" height="50" rx="16" 
					fill={secondary} />
			</Mask>
			<G mask="url(#mask0)">
				<Path d="M49.5 38.5L48.5 42L47.5 43L46 45L44 46.6L40.5 49L36 50H24L15.5 38V33L19.5 28.5H26L20 21.5L19 18L19.5 15L21.5 12.5L25 11L28 12L30 14L49.5 38.5Z" 
					fill={shadow}/>
			</G>
			<Path d="M25.0001 11C21.3921 11 18.4667 13.9226 18.4667 17.5297C18.4667 21.1368 21.3921 24.0594 25.0001 24.0594C28.608 24.0594 31.5334 21.1368 31.5334 17.5297C31.5334 13.9226 28.608 11 25.0001 11Z" 
				fill={primary} />
			<Path d="M21.2667 27.7891C17.6587 27.7891 14.7334 30.713 14.7334 34.3214V38.983H35.2667V34.3214C35.2667 30.713 32.3415 27.7891 28.7334 27.7891H21.2667Z" 
				fill={primary} />
		</Svg>
	)
}

AccountIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	shadow: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

AccountIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	shadow: colors.blueDarkShadow,
	width: 50,
	height: 50
}

export default AccountIcon

