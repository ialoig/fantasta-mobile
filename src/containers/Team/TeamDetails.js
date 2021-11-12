import { useRoute } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { 
	useAnimatedGestureHandler, 
	useAnimatedStyle, 
	useSharedValue, 
	withSpring } from "react-native-reanimated"
import { Card } from "../../components"
import ChartSummary from "../../components/Chart/ChartSummary"
import PieChart from "../../components/Chart/PieChart"
import PlayersComp from "../../components/Players/PlayersComp"
import { Leagues, Players } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { getHeaderHeight, getMaxHeader } from "../../utils/deviceUtils"
import styles from "./styles"

const MAX_HEADER = getMaxHeader()
const HEADER_HEIGHT = getHeaderHeight()
const END_TOP = MAX_HEADER + HEADER_HEIGHT
const snapPoints = [-END_TOP, 0]


function TeamDetails({ teamID, style }) {

	const { params } = useRoute()
	//get team ID from route params
	//TODO: check to be done: sometimes seems that teamID is null. 
	//It returns an error on props-type validation because it's marked as required
	teamID = params?.teamID ? params?.teamID : teamID

	const [team, setTeam] = useState()
	const [league, setLeague] = useState(Leagues.getActiveLeague())
	const [totalSpent, setTotalSpent] = useState(0)
	const [players, setPlayers] = useState()

	//shared value to store allt the scroll Y values
	const translateY = useSharedValue(0)
	//ref for FlatList component
	const flatRef = useRef(null)

	useEffect(() => {
		console.log("[TeamDetails - useEffect] - teamID=", teamID)
		const team = Leagues.getTeamByID(teamID)
		setTeam(team)
		console.log("[TeamDetails - useEffect] - team=", team.name)
		
		const league = Leagues.getActiveLeague()
		setLeague(league)

		getRandomPlayers()

		defineTotalSpent()

		//get players from api
		// const apiPlayers = Object.values(Players.getPlayers())

		// const players = team.footballPlayers
		// setPlayers(players)

		// setLeague(apiLeague)
		console.log("[TeamDetails - useEffect] - league=", league.name)
		// console.log("[TeamDetails - useEffect] - players size=", players.length)
	}, [teamID])


	//TODO: to be deleted after calculation of players from team object
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max-min+1) + min )
	}

	//TODO: just for debug, replace with the correct players calculated from team object (ie. team.footballPlayers)
	const getRandomPlayers = () => {
		//get players from api
		const apiPlayers = Object.values(Players.getPlayers())
		
		const size = apiPlayers.length
		console.log("[TeamDetails - getRandomPlayers] - size", size)
		const players = []
		const indexes = []
		for (let i = 0; i<randomNumberFromRange(10, 25); i++) {
			const random = Math.random()
			const randomIndex = Math.round(random * size)
			if (indexes.find(item => item === randomIndex)) {
				continue
			} else {
				indexes.push(randomIndex)
			}
			
			players.push(apiPlayers[randomIndex])
		}
		setPlayers(players)
	}


	const panGestureEvent = useAnimatedGestureHandler({
		onStart: (event, ctx) => {
			ctx.y = translateY.value
		},
		onActive: (event, ctx) => {
			// translate Y value will be the current scroll Y value (event.translationY) plus the 
			// the scroll Y value that was stored with the previous pan gesture
			// clamp is needed to don't go over lower or upper values
			// console.log("[panGestureEvent - TeamDetails] - translateY=", translateY.value)
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


	//TODO: must be calculated from team.footballPlayers values
	const budgetSpent = [
		{ role: "por", value: randomNumberFromRange(10, 40) },
		{ role: "dif", value: randomNumberFromRange(40, 60) },
		{ role: "cen", value: randomNumberFromRange(90, 150) },
		{ role: "att", value: randomNumberFromRange(150, 250) },
	]


	const defineTotalSpent = () => {
		//calculate totale spent as a sum of the values of budgetSpent
		const ts = budgetSpent?.reduce(
			(accumulator, currentValue) =>  accumulator + currentValue.value, 0)
		ts === undefined ? 0 : ts
		setTotalSpent(ts)
	}

	const totalRemaining = league.budget - totalSpent

	const maxPlayers = league.goalkeepers + league.defenders + league.midfielders + league.strikers

	return (
		<View style={[styles.container, style]}>
			
			{ league && team && players && 
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

						{/* CHART SECTION */}
						<View style={styles.budgetCard}>
							<PieChart 
								maxValue={league.budget}
								totalSpent={totalSpent}
								budgetSpent={budgetSpent} //TODO: TO BE CALCULATED
							/>
							<ChartSummary 
								balance={totalRemaining}
								teamPlayers={players.length}
								maxPlayers={maxPlayers}
							/>
						</View>


						<View style={commonStyle.separator} />


						{/* PLAYER LIST SECTION */}
						<Text style={textStyles.h1}>{I18n.translate("team")}</Text>			
						
						<PlayersComp 
							players={players}
							searchBoxShown={false}
							searchBoxSticky={true}
						/>
					</Animated.View>
				</PanGestureHandler>
			}

		</View>
	)
}

TeamDetails.propTypes = {
	teamID: PropTypes.string.isRequired,
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default TeamDetails

