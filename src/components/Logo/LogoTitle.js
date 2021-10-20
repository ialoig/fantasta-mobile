import PropTypes from "prop-types"
import React from "react"
import { View } from "react-native"
import Animated, { 
	Easing,
	useAnimatedStyle, 
	useSharedValue, 
	withRepeat,
	withTiming } from "react-native-reanimated"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../styles"
import styles from "./styles"


function LogoTitle({ color, width, height, ...props }) {

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
		<View style={styles.title}>
			<Animated.View style={animStyle}>
				<Svg
					width={width}
					height={height}
					viewBox={viewBox}
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					{...props}
				>
					<Path
						d="M10.71 11.97H7.14V28H3.115V11.97H.84V8.715h2.275V7.35c0-2.217.583-3.827 1.75-4.83C6.055 1.493 7.91.98 10.43.98v3.325c-1.213 0-2.065.233-2.555.7-.49.443-.735 1.225-.735 2.345v1.365h3.57v3.255zm2.206 6.3c0-1.937.397-3.652 1.19-5.145.817-1.493 1.913-2.648 3.29-3.465 1.4-.84 2.94-1.26 4.62-1.26 1.517 0 2.835.303 3.955.91 1.143.583 2.053 1.318 2.73 2.205v-2.8h4.025V28h-4.025v-2.87c-.677.91-1.598 1.668-2.765 2.275s-2.497.91-3.99.91c-1.657 0-3.173-.42-4.55-1.26-1.377-.863-2.473-2.053-3.29-3.57-.793-1.54-1.19-3.278-1.19-5.215zm15.785.07c0-1.33-.28-2.485-.84-3.465-.537-.98-1.248-1.727-2.135-2.24a5.632 5.632 0 00-2.87-.77 5.632 5.632 0 00-2.87.77c-.887.49-1.61 1.225-2.17 2.205-.537.957-.805 2.1-.805 3.43s.268 2.497.805 3.5c.56 1.003 1.283 1.773 2.17 2.31.91.513 1.867.77 2.87.77a5.632 5.632 0 002.87-.77c.887-.513 1.598-1.26 2.135-2.24.56-1.003.84-2.17.84-3.5zM47.697 8.4c1.517 0 2.87.315 4.06.945 1.213.63 2.158 1.563 2.835 2.8.677 1.237 1.015 2.73 1.015 4.48V28h-3.955V17.22c0-1.727-.432-3.045-1.295-3.955-.864-.933-2.042-1.4-3.535-1.4-1.494 0-2.684.467-3.57 1.4-.864.91-1.295 2.228-1.295 3.955V28h-3.99V8.715h3.99v2.205c.653-.793 1.481-1.412 2.485-1.855a8.124 8.124 0 013.255-.665zm17.654 3.57v10.675c0 .723.164 1.248.49 1.575.35.303.934.455 1.75.455h2.45V28h-3.15c-1.796 0-3.173-.42-4.13-1.26-.956-.84-1.435-2.205-1.435-4.095V11.97h-2.275V8.715h2.275V3.92h4.025v4.795h4.69v3.255h-4.69zm7.038 6.3c0-1.937.396-3.652 1.19-5.145.816-1.493 1.913-2.648 3.29-3.465 1.4-.84 2.94-1.26 4.62-1.26 1.516 0 2.835.303 3.955.91 1.143.583 2.053 1.318 2.73 2.205v-2.8h4.025V28h-4.025v-2.87c-.677.91-1.599 1.668-2.765 2.275-1.167.607-2.497.91-3.99.91-1.657 0-3.174-.42-4.55-1.26-1.377-.863-2.474-2.053-3.29-3.57-.794-1.54-1.19-3.278-1.19-5.215zm15.785.07c0-1.33-.28-2.485-.84-3.465-.537-.98-1.249-1.727-2.135-2.24a5.632 5.632 0 00-2.87-.77 5.631 5.631 0 00-2.87.77c-.887.49-1.61 1.225-2.17 2.205-.537.957-.805 2.1-.805 3.43s.268 2.497.805 3.5c.56 1.003 1.283 1.773 2.17 2.31.91.513 1.866.77 2.87.77a5.632 5.632 0 002.87-.77c.886-.513 1.598-1.26 2.135-2.24.56-1.003.84-2.17.84-3.5zm16.265 9.975c-1.516 0-2.881-.268-4.095-.805-1.19-.56-2.134-1.307-2.834-2.24a5.667 5.667 0 01-1.12-3.185h4.129c.07.817.455 1.505 1.155 2.065.724.537 1.622.805 2.695.805 1.12 0 1.984-.21 2.59-.63.63-.443.945-1.003.945-1.68 0-.723-.35-1.26-1.05-1.61-.676-.35-1.761-.735-3.255-1.155-1.446-.397-2.625-.782-3.535-1.155a6.347 6.347 0 01-2.38-1.715c-.653-.77-.98-1.785-.98-3.045 0-1.027.304-1.96.91-2.8.607-.863 1.47-1.54 2.59-2.03 1.144-.49 2.45-.735 3.92-.735 2.194 0 3.955.56 5.285 1.68 1.354 1.097 2.077 2.602 2.17 4.515h-3.99c-.07-.863-.42-1.552-1.05-2.065-.63-.513-1.481-.77-2.555-.77-1.05 0-1.855.198-2.415.595-.56.397-.84.922-.84 1.575 0 .513.187.945.56 1.295.374.35.829.63 1.365.84.537.187 1.33.432 2.38.735 1.4.373 2.544.758 3.43 1.155.91.373 1.692.933 2.345 1.68.654.747.992 1.738 1.015 2.975 0 1.097-.303 2.077-.91 2.94-.606.863-1.47 1.54-2.59 2.03-1.096.49-2.391.735-3.885.735zm16.352-16.345v10.675c0 .723.163 1.248.49 1.575.35.303.933.455 1.75.455h2.45V28h-3.15c-1.797 0-3.174-.42-4.13-1.26-.957-.84-1.435-2.205-1.435-4.095V11.97h-2.275V8.715h2.275V3.92h4.025v4.795h4.69v3.255h-4.69zm7.037 6.3c0-1.937.397-3.652 1.19-5.145.817-1.493 1.914-2.648 3.29-3.465 1.4-.84 2.94-1.26 4.62-1.26 1.517 0 2.835.303 3.955.91 1.144.583 2.054 1.318 2.73 2.205v-2.8h4.025V28h-4.025v-2.87c-.676.91-1.598 1.668-2.765 2.275-1.166.607-2.496.91-3.99.91-1.656 0-3.173-.42-4.55-1.26-1.376-.863-2.473-2.053-3.29-3.57-.793-1.54-1.19-3.278-1.19-5.215zm15.785.07c0-1.33-.28-2.485-.84-3.465-.536-.98-1.248-1.727-2.135-2.24a5.63 5.63 0 00-2.87-.77 5.634 5.634 0 00-2.87.77c-.886.49-1.61 1.225-2.17 2.205-.536.957-.805 2.1-.805 3.43s.269 2.497.805 3.5c.56 1.003 1.284 1.773 2.17 2.31.91.513 1.867.77 2.87.77a5.63 5.63 0 002.87-.77c.887-.513 1.599-1.26 2.135-2.24.56-1.003.84-2.17.84-3.5z"
						fill={color}
					/>
				</Svg>
			</Animated.View>
		</View>

	)
}

LogoTitle.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number
}

LogoTitle.defaultProps = {
	color: colors.secondary,
	width: 148,
	height: 30
}

export default LogoTitle
