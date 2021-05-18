import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function MarketIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect x="0.54541" width="120" height="120" rx="40" 
				fill={secondary} />
			<Path d="M91 60.0027C91 76.5686 77.575 90 60.9993 90C44.4426 90 31 76.5686 31 60.0027C31 43.4328 44.4426 30 60.998 30C77.5751 30 91 43.4328 91 60.0027Z" 
				fill={primary} />
			<Path d="M59.1266 78.709V74.3319C56.0695 74.2395 53.1075 73.3758 51.3745 72.417L52.7407 67.0838C54.6557 68.1322 57.3461 69.0883 60.3109 69.0883C62.9089 69.0883 64.7329 68.0412 64.7329 66.2635C64.7329 64.5306 63.2294 63.436 59.8545 62.2979C54.9762 60.6547 51.6475 58.3758 51.6475 53.9539C51.6475 49.8959 54.4764 46.7479 59.352 45.8394V41.5071H63.8216V45.5189C66.8746 45.6098 68.9267 46.2957 70.4763 47.0236L69.1114 52.1734C67.9706 51.6288 65.8261 50.5804 62.5449 50.5804C59.5802 50.5804 58.6241 51.9018 58.6241 53.1771C58.6241 54.6356 60.2185 55.6406 64.0946 57.053C69.565 58.9693 71.7081 61.4777 71.7081 65.6252C71.7081 69.6818 68.8805 73.1001 63.5934 74.0114V78.709H59.1252" 
				fill={secondary} />
		</Svg>
	)
}

MarketIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

MarketIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default MarketIcon

