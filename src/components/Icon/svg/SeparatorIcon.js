import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import Svg, { Rect } from "react-native-svg"
import colors from "../../../styles/colors"


const style = {
	paddingVertical: 12,
	paddingHorizontal: 12
}

function SeparatorIcon({ primary, width, height, ...props }) {
	return (
		<View style={style}>
			<Svg width={width} height={height} {...props}
				viewBox="0 0 90 2" fill="none" xmlns="http://www.w3.org/2000/svg">
				<Rect width="90" height="2" rx="1"
					fill={primary}/>
			</Svg>
		</View>
	
	)
}

SeparatorIcon.propTypes = {
	primary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

SeparatorIcon.defaultProps = {
	primary: colors.grey,
	width: 90,
	height: 2
}

export default SeparatorIcon

