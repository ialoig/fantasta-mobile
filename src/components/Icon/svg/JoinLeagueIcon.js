import PropTypes from "prop-types"
import React from "react"

import Svg, { G, Mask, Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function JoinLeagueIcon({ primary, secondary, shadow, width, height, ...props }) {
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
			<Path d="M13 15.5146V22.2177C13 29.804 17.9745 36.5387 25.3487 38.9362C25.6103 39.0213 25.8931 39.0213 26.1547 38.9362C33.527 36.5386 38.5 29.8053 38.5 22.2208V15.5146C38.5 14.9617 38.1263 14.4751 37.5825 14.3201L26.113 11.0499C25.9963 11.0166 25.8759 11 25.7555 11C25.6352 11 25.5149 11.0166 25.3983 11.0498L13.9178 14.32C13.3739 14.4749 13 14.9616 13 15.5146Z" 
				fill={primary} />
			<Path d="M19.3636 23.4091C19.3636 22.2794 20.2794 21.3636 21.4091 21.3636H26.8636C27.9933 21.3636 28.9091 22.2794 28.9091 23.4091C28.9091 24.5388 27.9933 25.4545 26.8636 25.4545H23.4545C23.078 25.4545 22.7727 25.7598 22.7727 26.1364C22.7727 26.5129 23.078 26.8182 23.4545 26.8182H26.8636C28.7464 26.8182 30.2727 25.2919 30.2727 23.4091C30.2727 21.5263 28.7464 20 26.8636 20H21.4091C19.5263 20 18 21.5263 18 23.4091C18 24.2732 18.3224 25.0637 18.8525 25.6642C19.1016 25.9466 19.5325 25.9734 19.8148 25.7242C20.0971 25.475 20.124 25.0442 19.8748 24.7619C19.5562 24.4009 19.3636 23.9283 19.3636 23.4091Z" 
				fill={secondary} />
			<Path d="M24.1364 22.7273C22.2536 22.7273 20.7273 24.2536 20.7273 26.1364C20.7273 28.0192 22.2536 29.5455 24.1364 29.5455H29.5909C31.4737 29.5455 33 28.0192 33 26.1364C33 25.2722 32.6776 24.4818 32.1475 23.8812C31.8984 23.5989 31.4675 23.572 31.1852 23.8212C30.9029 24.0704 30.876 24.5013 31.1252 24.7836C31.4438 25.1446 31.6364 25.6171 31.6364 26.1364C31.6364 27.266 30.7206 28.1818 29.5909 28.1818H24.1364C23.0067 28.1818 22.0909 27.266 22.0909 26.1364C22.0909 25.0067 23.0067 24.0909 24.1364 24.0909H27.5455C27.922 24.0909 28.2273 23.7856 28.2273 23.4091C28.2273 23.0325 27.922 22.7273 27.5455 22.7273H24.1364Z" 
				fill={secondary} />
		</Svg>
	)
}

JoinLeagueIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	shadow: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

JoinLeagueIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	shadow: colors.blueDarkShadow,
	width: 50,
	height: 50
}

export default JoinLeagueIcon

