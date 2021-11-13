import PropTypes from "prop-types"
import React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"
import colors from "../../../../styles/colors"

function DifRoleIcon ({ width, height, primary, secondary, roleColor, type, completed, ...props }) {


	if (type === "small") {
		return (
			<Svg
				width={15}
				height={15}
				viewBox="0 0 15 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<Path
					d="M.91 2.419v3.59c0 4.065 2.664 7.672 6.615 8.957.14.045.291.045.431 0 3.95-1.285 6.614-4.892 6.614-8.955V2.42c0-.297-.2-.557-.492-.64L7.934.027a.699.699 0 00-.383 0l-6.15 1.752a.67.67 0 00-.492.64z"
					fill={completed ? primary : colors.errorRed}
				/>
			</Svg>
		)
	} else {
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
}

DifRoleIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	roleColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	type: PropTypes.string,
	completed: PropTypes.bool
}

DifRoleIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	roleColor: colors.dif,
	width: 50,
	height: 50,
	type: "normal",
	completed: false
}

export default DifRoleIcon