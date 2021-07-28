import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useRef } from "react"
import { Text, View } from "react-native"
import { FlatList, PanGestureHandler } from "react-native-gesture-handler"
import Animated, { 
	useAnimatedGestureHandler, 
	useAnimatedStyle, 
	useSharedValue, 
	withSpring } from "react-native-reanimated"
import { Card } from "../../components"
import { commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { deviceHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import styles from "./styles"

const League = ( item, onPress ) => {

	return (
		<Card
			key={item._id}
			onPress={onPress}
			title={item.name}
			description={item.team.name}
			type='small'
			arrow={true}
			icon={"league"}
		/>
	)
}


const maxHeight = deviceHeight
const minHeight = dynamicHeight(375, 463) //leagues height
const snapPoints = [-(maxHeight - minHeight), 0]

function Home(props) {

	//shared value to store allt the scroll Y values
	const translateY = useSharedValue(0)
	//ref for FlatList component
	const flatRef = useRef(null)

	const panGestureEvent = useAnimatedGestureHandler({
		onStart: (event, ctx) => {
			ctx.y = translateY.value 
		},
		onActive: (event, ctx) => {
			// translate Y value will be the current scroll Y value (event.translationY) plus the 
			// the scroll Y value that was stored with the previous pan gesture
			// clamp is needed to don't go over lower or upper values
			translateY.value = clamp(event.translationY + ctx.y, snapPoints[0], snapPoints[1])
		},
		onEnd: (event) => {
			const snapValue = snap(translateY.value, event.velocityY, snapPoints[0], snapPoints[1])
			translateY.value = withSpring(snapValue)
		}
	})


	const transformSyle = useAnimatedStyle( () => {
		return {
			transform: [{ translateY: translateY.value }]
		}
	})

	return (
		<View style={styles.container}>

			<PanGestureHandler 
				onGestureEvent={panGestureEvent}
				waitFor={flatRef}
				shouldCancelWhenOutside
			>

				<Animated.View style={transformSyle}>
					{ /** crea/join */}
					<View style={styles.buttons}>
						<Card
							onPress={props.crea}
							title={I18n.translate("create")}
							description=""
							type='square'
							arrow={false}
							icon={"create_league"}
						/>
						<Card
							onPress={props.join}
							title={I18n.translate("join")}
							description=""
							type='square'
							arrow={false}
							icon={"join_league"}
						/>
					</View>
					<View style={commonStyle.separator} />
					{ /** leagues */}
					<Text style={textStyles.h1}>{I18n.translate("yourLeagues")}</Text>
					<FlatList
						ref={flatRef}
						data={props.leagues}
						ListEmptyComponent={() => { 
							return (
								<Text style={[textStyles.description, styles.description]}>
									{I18n.translate("noLeaguesFound")}
								</Text>) 
						}}
						renderItem={item => League(item.item, () => props.joinLeague( item.item ) )}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						contentContainerStyle={styles.list}
					/>
				</Animated.View>
			</PanGestureHandler>
		</View>
	)
}
		
export default Home


Home.propTypes = {
	leagues: PropTypes.array,
	join: PropTypes.func,
	crea: PropTypes.func,
	joinLeague: PropTypes.func
}
