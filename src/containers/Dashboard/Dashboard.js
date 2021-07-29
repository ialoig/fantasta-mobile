
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { Card, Header } from "../../components"
import { ROLE_CLASSIC, ROLE_MANTRA } from "../../constants"
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


const playersFakeData = [
	{
		"actualPrice": 17,
		"id": 250,
		"initialPrice": 17,
		"name": "HANDANOVIC",
		"roleClassic": "P",
		"roleMantra": [
			"Por",
		],
		"team": "Inter",
	},
	{
		"actualPrice": 15,
		"id": 4307,
		"initialPrice": 15,
		"name": "ROMERO",
		"roleClassic": "D",
		"roleMantra": [
			"Dc",
		],
		"team": "Atalanta",
	},
	{
		"actualPrice": 15,
		"id": 798,
		"initialPrice": 15,
		"name": "SKRINIAR",
		"roleClassic": "D",
		"roleMantra": [
			"Dc",
		],
		"team": "Inter",
	},
	{
		"actualPrice": 21,
		"id": 4292,
		"initialPrice": 21,
		"name": "HERNANDEZ T.",
		"roleClassic": "D",
		"roleMantra": [
			"Ds",
			"E",
		],
		"team": "Milan",
	},
	{
		"actualPrice": 14,
		"id": 4237,
		"initialPrice": 14,
		"name": "DANILO",
		"roleClassic": "D",
		"roleMantra": [
			"Dd",
			"Ds",
			"E",
		],
		"team": "Juventus",
	},
	{
		"actualPrice": 14,
		"id": 581,
		"initialPrice": 14,
		"name": "FARAONI",
		"roleClassic": "D",
		"roleMantra": [
			"Dd",
			"E",
		],
		"team": "Verona",
	},
	{
		"actualPrice": 18,
		"id": 697,
		"initialPrice": 18,
		"name": "CUADRADO",
		"roleClassic": "D",
		"roleMantra": [
			"Dd",
			"E",
		],
		"team": "Juventus",
	},
	{
		"actualPrice": 27,
		"id": 1850,
		"initialPrice": 27,
		"name": "KESSIE'",
		"roleClassic": "C",
		"roleMantra": [
			"M",
			"C",
		],
		"team": "Milan",
	},
	{
		"actualPrice": 16,
		"id": 827,
		"initialPrice": 16,
		"name": "LOCATELLI",
		"roleClassic": "C",
		"roleMantra": [
			"M",
			"C",
		],
		"team": "Sassuolo",
	},
	{
		"actualPrice": 15,
		"id": 788,
		"initialPrice": 15,
		"name": "FREULER",
		"roleClassic": "C",
		"roleMantra": [
			"C",
		],
		"team": "Atalanta",
	},
	{
		"actualPrice": 18,
		"id": 2077,
		"initialPrice": 18,
		"name": "PASALIC",
		"roleClassic": "C",
		"roleMantra": [
			"C",
			"T",
		],
		"team": "Atalanta",
	},
	{
		"actualPrice": 25,
		"id": 2085,
		"initialPrice": 25,
		"name": "LUIS ALBERTO",
		"roleClassic": "C",
		"roleMantra": [
			"T",
		],
		"team": "Lazio",
	},
	{
		"actualPrice": 31,
		"id": 531,
		"initialPrice": 31,
		"name": "BERARDI",
		"roleClassic": "A",
		"roleMantra": [
			"A",
		],
		"team": "Sassuolo",
	},
	{
		"actualPrice": 32,
		"id": 409,
		"initialPrice": 32,
		"name": "INSIGNE",
		"roleClassic": "A",
		"roleMantra": [
			"A",
		],
		"team": "Napoli",
	},
	{
		"actualPrice": 19,
		"id": 2766,
		"initialPrice": 19,
		"name": "ZANIOLO",
		"roleClassic": "C",
		"roleMantra": [
			"W",
			"T",
		],
		"team": "Roma",
	},	  
	{
		"actualPrice": 25,
		"id": 410,
		"initialPrice": 25,
		"name": "MERTENS",
		"roleClassic": "A",
		"roleMantra": [
			"A",
		],
		"team": "Napoli",
	},
	{
		"actualPrice": 25,
		"id": 309,
		"initialPrice": 25,
		"name": "DYBALA",
		"roleClassic": "A",
		"roleMantra": [
			"A",
		],
		"team": "Juventus",
	},
	{
		"actualPrice": 44,
		"id": 2531,
		"initialPrice": 44,
		"name": "LUKAKU",
		"roleClassic": "A",
		"roleMantra": [
			"Pc",
		],
		"team": "Inter",
	},
	{
		"actualPrice": 44,
		"id": 2610,
		"initialPrice": 44,
		"name": "RONALDO",
		"roleClassic": "A",
		"roleMantra": [
			"Pc",
		],
		"team": "Juventus",
	}
]

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
		let allPlayers = Object.values(apiPlayers).slice(0, 50)

		const players = team.footballPlayers
		// setPlayers(players)
		setPlayers(playersFakeData) //TODO: just for debug, replace with the correct one (line above)

		setTeam(team)
		setLeague(apiLeague)
		console.log("league", league)
		console.log("team size=", playersFakeData.length)
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
			// console.log("translateY=", translateY.value)
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
				waitFor={flatRef}
				shouldCancelWhenOutside
			>
				<Animated.View style={transformSyle}>
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
					
					{/* Roles filter buttons */}
					<RolesFilter 
						roles={league.type === "classic" ? ROLE_CLASSIC : ROLE_MANTRA}
						onPress={() => {console.log("onPress")}}
						isActive={() => {console.log("onPress")}}
					/>

					{/* Rendering list of players */ }
					<View style={styles.team}>
						<PlayerList 
							ref={flatRef}
							players={players}
							isClassic={true}
							onScroll={() => {}}
							onScrollEnd={() => {}}
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

