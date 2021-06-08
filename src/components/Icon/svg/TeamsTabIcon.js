import PropTypes from "prop-types"
import React from "react"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function TeamsTabIcon({ primary, secondary, width, height, ...props }) {
	return (
		<Svg width={width} height={height} {...props}
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Path d="M35.2746 37L35.2745 20.2689V13H30.5149C30.5149 15.4071 28.5956 17.6108 26.1873 17.6108C23.7692 17.6108 21.8499 15.4071 21.8499 13L17.09 13L17.0903 37H35.2746Z" 
				fill={primary} />
			<Path d="M10 17.8205L13.5609 22.6363L17.09 20.2685V13L10 17.8205Z" 
				fill={primary} />
			<Path d="M35.2745 13V20.2689L38.803 22.6363L42.3648 17.8205L35.2745 13Z" 
				fill={primary} />
		</Svg>
	)
}

TeamsTabIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

TeamsTabIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default TeamsTabIcon

