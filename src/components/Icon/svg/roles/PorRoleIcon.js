import PropTypes from "prop-types"
import React from "react"
import Animated, { useAnimatedStyle } from "react-native-reanimated"
import Svg, { Circle, Path, Rect } from "react-native-svg"
import colors from "../../../../styles/colors"
import { opacityAnimation } from "../../../../utils/animationUtils"

const PorRoleIcon = ({ width, height, primary, secondary, roleColor, type, completed, ...props }) => {
	
	const animOpacity = props.animated ? opacityAnimation(0, -1, 2000) : 1

	const animStyle = useAnimatedStyle( () => {
		return {
			opacity: animOpacity.value
		}
	})
	
	if (type === "small") {
		return (
			<Svg
				width={11}
				height={15}
				viewBox="0 0 11 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<Path
					d="M10.286 4.327c-.28-.073-.56-.037-.77.11L9.901 2.9a1.155 1.155 0 00-.77-1.426c-.595-.183-1.19.183-1.366.805l.21-.842C8.15.852 7.8.193 7.205.047c-.56-.183-1.19.183-1.33.805l-.28 1.097c.174-.585-.176-1.243-.771-1.39-.56-.183-1.19.183-1.33.805-.316 1.134-.28 1.06-.596 2.231-.14.476-.315 1.134-.49 1.866l-.07-.439c-.14-.658-.735-1.097-1.4-.951-.63.146-1.051.768-.911 1.463.21.549.385 1.207.525 1.976.07.365.105.695.14 1.024a4.896 4.896 0 00.98 3.11.596.596 0 00-.14.255l-.28.988c-.105.402.106.804.49.914l4.097 1.17c.386.11.77-.109.876-.511l.28-.988a.743.743 0 00-.035-.476c1.295-.548 2.31-1.719 2.731-3.219l.175-.695.21-.804.7-2.707c.316-.549.036-1.098-.49-1.244z"
					fill={completed ? primary : colors.errorRed}
				/>
			</Svg>
		)
	} else {
		return (
			<Animated.View style={animStyle}>
				<Svg 
					width={width} 
					height={height} 
					viewBox="0 0 50 50" 
					fill="none" 
					xmlns="http://www.w3.org/2000/Svg"
					{...props}
				>
					<Rect width="50" height="50" rx="16" 
						fill={secondary} />
					<Circle cx="24.6816" cy="15" r="8" 
						fill={primary} />
					<Path d="M26.731 35.5356C26.6205 34.873 26.4365 34.2472 26.1788 33.6214V33.5846V33.5478C25.9947 32.6274 26.5837 31.7071 27.504 31.5231C27.6145 31.4863 27.7249 31.4863 27.8353 31.4863C28.2771 31.4863 28.7188 31.6703 29.0133 31.9648L29.7864 29.1303C29.9705 28.4309 30.6331 27.9523 31.3325 27.9523C31.4798 27.9523 31.627 27.9891 31.7743 28.0259C32.0319 28.0995 32.216 28.21 32.4001 28.3572C32.6578 27.805 33.2099 27.4369 33.8357 27.4369C33.983 27.4369 34.1302 27.4737 34.2775 27.5105C34.9401 27.6946 35.4187 28.2836 35.4555 28.9462C35.5659 28.9094 35.7132 28.9094 35.8236 28.9094C35.8972 28.9094 36.0077 28.9094 36.0813 28.9462C35.7132 25.6699 32.9523 23.1299 29.5655 23.1299H29.1606C27.9458 24.2343 26.326 24.8969 24.5591 24.8969C22.7921 24.8969 21.1723 24.2343 19.9575 23.1299H19.5526C15.945 23.1299 13 26.0749 13 29.6825V39.7322H24.5959H27.8353L27.8722 39.6218C27.2095 38.7015 26.8782 37.5971 26.915 36.4927C26.8414 36.1614 26.7678 35.8301 26.731 35.5356Z" 
						fill={primary} />
					<Path d="M38.3329 33.2593C38.0384 33.1857 37.7439 33.2225 37.5231 33.3697L37.928 31.8236C38.1121 31.1978 37.7439 30.572 37.1181 30.3879C36.4923 30.2039 35.8665 30.572 35.6824 31.1978L35.9033 30.3511C36.0874 29.7621 35.7193 29.0995 35.0934 28.9523C34.5045 28.7682 33.8418 29.1363 33.6946 29.7621L33.4001 30.8665C33.5841 30.2775 33.216 29.6149 32.5902 29.4676C32.0012 29.2836 31.3386 29.6517 31.1913 30.2775C30.86 31.4187 30.8968 31.3451 30.5655 32.5231C30.4183 33.0016 30.2342 33.6642 30.0502 34.4005L29.9765 33.9587C29.8293 33.2961 29.2035 32.8544 28.504 33.0016C27.8414 33.1489 27.3997 33.7747 27.5469 34.4741C27.7678 35.0263 27.9519 35.6889 28.0991 36.462C28.1727 36.8301 28.2096 37.1614 28.2464 37.4927C28.2096 38.6339 28.5777 39.7383 29.2771 40.6218C29.2035 40.6954 29.1667 40.769 29.1299 40.8794L28.8354 41.8734C28.7249 42.2783 28.9458 42.6832 29.3507 42.7937L33.6578 43.9717C34.0627 44.0821 34.4676 43.8612 34.5781 43.4563L34.8726 42.4624C34.9094 42.3151 34.9094 42.1311 34.8358 41.9838C36.1978 41.4316 37.2654 40.2536 37.7071 38.7443L37.8912 38.0449L38.1121 37.235L38.8483 34.5109C39.1796 33.9587 38.8851 33.4066 38.3329 33.2593Z" 
						fill={roleColor} />
				</Svg>
			</Animated.View>
		)
	}
}

PorRoleIcon.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	roleColor: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	type: PropTypes.string,
	completed: PropTypes.bool
}

PorRoleIcon.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	roleColor: colors.por,
	width: 50,
	height: 50,
	type: "normal",
	completed: false
}


export default PorRoleIcon