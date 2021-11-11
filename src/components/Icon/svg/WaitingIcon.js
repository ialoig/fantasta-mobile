import PropTypes from "prop-types"
import React from "react"
import { StyleSheet, View } from "react-native"

import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../../styles/colors"

function WaitingIcon({ primary, secondary, width, height, ...props }) {
	return (
		<View style={style.icon}>
			<Svg 
				width={width} 
				height={height} 
				viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
				{...props}>
				<Rect 
					width={width} 
					height={height} 
					rx="40" 
					fill={secondary}/>
				<Path d="M65.4548 59.9999C65.4548 56.6649 70.8648 54.3849 73.7881 49.9999C77.1214 44.9999 77.1214 33.3333 77.1214 33.3333H43.7881C43.7881 33.3333 43.7881 44.9999 47.1214 49.9999C50.0448 54.3849 55.4548 56.6649 55.4548 59.9999C55.4548 63.3349 50.0448 65.6149 47.1214 69.9999C43.7881 74.9999 43.7881 86.6666 43.7881 86.6666H77.1214C77.1214 86.6666 77.1214 74.9999 73.7881 69.9999C70.8648 65.6149 65.4548 63.3349 65.4548 59.9999Z" 
					fill="#D0DBEA"/>
				<Path d="M65.4537 69.9999C63.7887 69.9999 62.0254 68.3332 62.0254 66.6666C62.1221 63.8116 62.1221 61.9233 62.1221 59.9999C62.1221 54.6333 67.1787 52.3983 70.2887 48.3333H50.6221C53.7304 52.3983 58.7887 54.6333 58.7887 59.9999C58.7887 61.9249 58.7887 63.8149 58.8854 66.6666C58.8854 68.3332 57.1221 69.9999 55.4554 69.9999C52.1221 69.9999 49.4637 72.9732 48.7887 74.9999C47.1221 79.9999 47.1221 86.6666 47.1221 86.6666H73.7887C73.7887 86.6666 73.7887 79.9999 72.1221 74.9999C71.4471 72.9732 68.7871 69.9999 65.4537 69.9999Z" 
					fill={secondary}/>
				<Path d="M80.4551 86.6667C80.4551 88.5067 78.9617 90 77.1217 90H43.7884C41.9484 90 40.4551 88.5067 40.4551 86.6667C40.4551 84.8267 41.9484 83.3333 43.7884 83.3333H77.1217C78.9617 83.3333 80.4551 84.8267 80.4551 86.6667ZM80.4551 33.3333C80.4551 35.1733 78.9617 36.6667 77.1217 36.6667H43.7884C41.9484 36.6667 40.4551 35.1733 40.4551 33.3333C40.4551 31.4933 41.9484 30 43.7884 30H77.1217C78.9617 30 80.4551 31.4933 80.4551 33.3333Z" 
					fill={primary}/>
			</Svg>
		</View>
	)
}

WaitingIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

WaitingIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 50,
	height: 50
}

export default WaitingIcon


export const style = StyleSheet.create({
	icon: {
		padding: 8
	},
})