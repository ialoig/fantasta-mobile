import PropTypes from "prop-types"
import React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"
import colors from "../../../../styles/colors"

function DifRoleIcon ({ width, height, primary, secondary, roleColor }) {
	return (
		<Svg width={width} height={height} 
			viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/Svg">
			<Rect width="50" height="50" rx="16" 
				fill={secondary} />
			<Circle cx="25" cy="15" r="8" 
				fill={primary} />
			<Path d="M28 32.9348V35.8076C28 39.0588 30.1319 41.9452 33.2923 42.9727C33.4044 43.0091 33.5256 43.0091 33.6377 42.9727C36.7973 41.9451 38.9286 39.0594 38.9286 35.8089V32.9348C38.9286 32.6979 38.7684 32.4893 38.5354 32.4229L33.6199 31.0214C33.5698 31.0071 33.5182 31 33.4666 31C33.4151 31 33.3635 31.0071 33.3136 31.0214L28.3933 32.4228C28.1602 32.4892 28 32.6978 28 32.9348Z" 
				fill={roleColor} />
			<Path d="M28.5696 40.5737C27.5703 39.1439 27 37.4252 27 35.6089V32.2573C27 31.9808 27.187 31.7375 27.4589 31.66L33.1992 30.0249C33.2575 30.0083 33.3176 30 33.3778 30C33.438 30 33.4981 30.0083 33.5565 30.025L37.5 31.1493V30C37.4632 26.0737 34.4421 23 30.6105 23H30.1684C28.8789 24.1421 27.1474 24.8421 25.2684 24.8421C23.3895 24.8421 21.6947 24.1421 20.3684 23H19.9263C16.0947 23 13 26.0947 13 29.9263V40.5737H28.5696Z" 
				fill={primary} />
		</Svg>
	)
}

DifRoleIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	roleColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

DifRoleIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	roleColor: colors.dif,
	width: 50,
	height: 50
}

export default DifRoleIcon