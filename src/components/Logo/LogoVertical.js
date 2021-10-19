import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import Animated, { Easing, 
	useAnimatedStyle, 
	useSharedValue, 
	withRepeat, 
	withSequence, 
	withTiming } from "react-native-reanimated"
import Svg, { Path, Rect } from "react-native-svg"
import colors from "../../styles/colors"
import LogoTitle from "./LogoTitle"
import styles from "./styles"



export const LogoVertical = ({ width, height, primary, secondary, ...props }) => {

	const animScaleValue = useSharedValue(0.8)

	animScaleValue.value = 
		withRepeat(withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }), -1, true)
	

 
	const animStyle = useAnimatedStyle( () => {
		return {
			transform: [{ 
				scale: animScaleValue.value
			}]
		}
	})

	const viewBox = [0, 0, width, height]

	return (
		<View style={styles.container}>
			<Animated.View style={animStyle}>
				<Svg
					width={width}
					height={height}
					viewBox={viewBox}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<Rect x={0.5} width={width} height={height} rx={26} fill={secondary} />

					<Path
						d="M70.548 44.093a.619.619 0 01-.467-.213L67.4 40.807l-3.032 2.674a.619.619 0 11-.82-.929l3.499-3.086a.62.62 0 01.876.058l3.095 3.543a.619.619 0 01-.06.867.612.612 0 01-.41.16zM14.895 41.151h-.04a.62.62 0 01-.425-.212l-3.095-3.543a.618.618 0 01.741-.97.618.618 0 01.191.157l2.683 3.074 3.031-2.674a.62.62 0 11.819.928l-3.495 3.085a.619.619 0 01-.41.155z"
						fill={primary}
						stroke={primary}
						strokeWidth={0.5}
					/>
					<Path
						d="M41.155 67.02a26.85 26.85 0 01-24.437-15.722.617.617 0 01.295-.842.62.62 0 01.83.328 25.616 25.616 0 0023.312 14.998c14.12 0 25.605-11.487 25.605-25.606a.619.619 0 111.238 0A26.844 26.844 0 0141.155 67.02zM14.93 40.795a.62.62 0 01-.619-.619 26.848 26.848 0 0151.28-11.124.617.617 0 01-.295.842.62.62 0 01-.83-.328 25.613 25.613 0 00-23.31-14.996c-14.114 0-25.607 11.487-25.607 25.606a.62.62 0 01-.619.62z"
						fill={primary}
						stroke={primary}
						strokeWidth={0.5}
					/>
                        
					<Path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M57.654 42.518c.172-1.158.796-6.154-2.023-11l-.027.067a17.447 17.447 0 00-7.25-6.985l.055-.025c-2.997-1.568-6.703-2.314-10.637-1.686l.047.027a17.213 17.213 0 00-8.756 4.157l-.006-.064s-4.714 3.697-5.655 10.317l.04-.03a17.186 17.186 0 00.932 8.873l-.065-.019c1.838 4.954 5.45 7.929 8.92 9.561l-.019-.048a17.108 17.108 0 009.757 1.452l-.029.036c4.637-.662 8.089-2.833 10.64-5.787l-.06-.002a17.214 17.214 0 004.106-8.898l.03.054z"
						fill={primary}
					/>
					<Path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M24.126 45.589c-1.472-4.281-.811-7.625-.811-7.625l2.843-2.27c.768 1.623 1.718 2.974 2.67 4.219-1.022 2.603-1.16 3.946-1.343 5.716l-.05.479c-1.147-.054-2.24-.205-3.31-.52zm13.193-22.611c.186.098.504.266 1.836 1.348-1.633.813-2.552 1.57-3.73 3.128-1.925.01-3.461.173-5.775 1.101a10.874 10.874 0 01-.247-1.848c3.06-2.532 5.579-3.255 7.89-3.743l.026.014zm11.492 1.814c2.724 1.468 4.999 3.647 6.583 6.305-.2.386-.353.937-.456 1.307a7.397 7.397 0 01-.088.306c-1.124-1.05-2.981-2.196-5.078-2.857-.758-1.904-1.686-3.256-2.812-4.216l1.85-.845zm-14.922 31.19c-.573-1.567-.625-2.943-.65-3.872 2.532-.02 3.916-.215 6.132-1.058.007-.002.059.041.154.12a18.822 18.822 0 004.894 2.93 75.11 75.11 0 00-.08.138c-.662 1.132-1.18 2.02-1.931 2.977-2.109.279-5.525.128-8.519-1.234zm18.638-11.734c.649-.467 2.544-1.947 3.55-3.157h-.001c.677.627 1.012 1.302 1.424 2.133l.024.049c-.39 2.088-1.256 4.814-3.48 7.541-.26.043-1.6.118-2.261-.12.594-1.494 1.07-3.547.744-6.446z"
						fill={secondary}
					/>
					<Path
						d="M40.65 34.072v-.889H39.461v.89h-1.183a3.261 3.261 0 000 6.521h3.556a2.072 2.072 0 110 4.145h-3.556a2.072 2.072 0 01-2.072-2.072v-.15H35.017v.15a3.261 3.261 0 003.261 3.26h1.183v.89h1.19v-.89h1.183a3.261 3.261 0 000-6.521h-3.556a2.072 2.072 0 010-4.145h3.556c1.144 0 2.072.928 2.072 2.072v.15H45.095v-.15a3.261 3.261 0 00-3.261-3.26H40.65z"
						fill={secondary}
						stroke={secondary}
						strokeWidth={0.3}
					/>
				</Svg>
			</Animated.View>
			<LogoTitle />
		</View>
	)
}

LogoVertical.propTypes = {
	primary: PropTypes.string,
	secondary: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

LogoVertical.defaultProps = {
	primary: colors.primary,
	secondary: colors.secondary,
	width: 80,
	height: 80
}