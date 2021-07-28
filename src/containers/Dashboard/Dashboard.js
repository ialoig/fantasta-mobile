
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { Card, Header } from "../../components"
import routes from "../../navigation/routesNames"
import { Leagues } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { deviceHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import styles from "./styles"


const maxHeight = deviceHeight
const minHeight = dynamicHeight(375, 450) //leagues height
const snapPoints = [-(maxHeight - minHeight), 0]
function Dashboard(props) {

	const { navigate, goBack } = useNavigation()
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [team, setTeam] = useState([])

	useEffect(() => {
		const apiLeague = Leagues.GetActiveLeague()
		const team = Object.values(apiLeague.teams)[0]
		setTeam(team)
		setLeague(apiLeague)
	}, [])


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
		<View style={[styles.container, commonStyle.paddingHeader]}>
			<Header 
				title="dashboard" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={ () => goBack() }
				rightButton
				iconTypeRight="account"
				onPressRight={ () => { navigate(routes.ACCOUNTNAVIGATOR) } }
			/>

			<PanGestureHandler 
				onGestureEvent={panGestureEvent}
				// waitFor={flatRef}
				shouldCancelWhenOutside
			>
				<Animated.View style={[styles.content, transformSyle]}>
					<Card
						key={league._id}
						title={league.name}
						description={team.name}
						type={"small"}
						icon={"league"}
					/>
					<Text style={textStyles.h1}>{I18n.translate("budget")}</Text>
					<Card
						key={"budget"}
						title={"budget"}
						description={team.name}
						type={"large"}
					/>
					
					<View style={commonStyle.separator} />
					<Text style={textStyles.h1}>{I18n.translate("team")}</Text>
				</Animated.View>
			</PanGestureHandler>
		</View>
	)
}

Dashboard.propTypes = {

}

export default Dashboard

