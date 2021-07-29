
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { Card, Header } from "../../components"
import { ROLE_CLASSIC } from "../../constants"
import routes from "../../navigation/routesNames"
import { Leagues, Players } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { deviceHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import PlayerList from "../Players/PlayerList"
import RolesFilter from "../Players/RolesFilter"
import styles from "./styles"


const maxHeight = deviceHeight
const minHeight = dynamicHeight(375, 450) //leagues height
const snapPoints = [-(maxHeight - 330), 0]

function Dashboard(props) {

	const { navigate, goBack } = useNavigation()
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [team, setTeam] = useState([])
	const [players, setPlayers] = useState(null)

	useEffect(() => {
		const apiLeague = Leagues.GetActiveLeague()
		const team = Object.values(apiLeague.teams)[0]


		//get players from api
		const apiPlayers = Players.GetPlayers()
		let players = Object.values(apiPlayers).slice(0, 50)
		setPlayers(players)

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
			console.log("translateY=", translateY.value)
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
					<View>
						{/* Roles filter buttons */}
						<RolesFilter 
							roles={ROLE_CLASSIC}
							onPress={() => {console.log("onPress")}}
							isActive={() => {console.log("onPress")}}
						/>

						{/* Rendering list of players */ }
						<PlayerList 
							ref={flatRef}
							players={players}
							isClassic={true}
							onScroll={() => {console.log("onScroll")}}
							onScrollEnd={() => {console.log("onScrollEnd")}}
						/>
					</View>
				</Animated.View>
			</PanGestureHandler>

			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="dashboard" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={ () => goBack() }
				rightButton
				iconTypeRight="account"
				onPressRight={ () => { navigate(routes.ACCOUNTNAVIGATOR) } }
			/>
		</View>
	)
}

Dashboard.propTypes = {

}

export default Dashboard

