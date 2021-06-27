import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"
import Svg, { Line } from "react-native-svg"
import colors from "../../../styles/colors"


function SeparatorIcon({ primary, width, height, horizontal, ...props }) {
	return (
		<>
			{
				horizontal &&
				<View style={style.styleHorizontal}>
					<Svg width={width} height={height} {...props}
						viewBox="0 0 90 2" fill="none" xmlns="http://www.w3.org/2000/svg">
						<Line y1="1" x2="90" y2="1" stroke={primary} stroke-width="2"/>
					</Svg>
				</View>
			}
			{
				!horizontal &&
				<View style={style.styleVertical}>
					<Svg width="2" height="50" {...props}
						viewBox="0 0 2 50" fill="none" xmlns="http://www.w3.org/2000/svg">
						<Line x1="1" x2="1" y2="50" stroke={primary} stroke-width="2"/>
					</Svg>
				</View>
			}
		</>
	
	)
}

SeparatorIcon.propTypes = {
	primary: PropTypes.string,
	width: PropTypes.number,
	horizontal: PropTypes.bool,
	vertical: PropTypes.bool,
	height: PropTypes.number
}

SeparatorIcon.defaultProps = {
	primary: colors.grey,
	horizontal: true,
	width: 90,
	height: 2
}

export default SeparatorIcon



const style = StyleSheet.create({
	styleHorizontal: {
		paddingVertical: 12,
	},
	styleVertical: {
		// paddingHorizontal: 8,
	}
})