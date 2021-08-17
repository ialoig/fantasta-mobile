
import { useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useEffect, useRef, useState } from "react"
import { Text, View } from "react-native"
import { PanGestureHandler } from "react-native-gesture-handler"
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import { Card, Header } from "../../components"
import ChartSummary from "../../components/Chart/ChartSummary"
import PieChart from "../../components/Chart/PieChart"
import PlayersComp from "../../components/Players/PlayersComp"
import routes from "../../navigation/routesNames"
import { Leagues, Players, User } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import { clamp, snap } from "../../utils/animationUtils"
import { getHeaderHeight, getMaxHeader } from "../../utils/deviceUtils"
import styles from "./styles"

const MAX_HEADER = getMaxHeader()
const HEADER_HEIGHT = getHeaderHeight()
const END_TOP = MAX_HEADER + HEADER_HEIGHT
const snapPoints = [-END_TOP, 0]


function Dashboard() {

	const { navigate, goBack } = useNavigation()
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [team, setTeam] = useState([])
	const [players, setPlayers] = useState([])

	//shared value to store allt the scroll Y values
	const translateY = useSharedValue(0)
	//ref for FlatList component
	const flatRef = useRef(null)

	useEffect(() => {
		const apiLeague = Leagues.GetActiveLeague()
		const myTeam = Leagues.GetMyTeam(User.Get().username)

		getRandomPlayers()

		//get players from api
		// const apiPlayers = Object.values(Players.GetPlayers())

		// const players = team.footballPlayers
		// setPlayers(players)

		setTeam(myTeam)
		setLeague(apiLeague)
		console.log("[Dashboard - useEffect] - league", league)
		// console.log("[Dashboard - useEffect] - players size=", players.length)
	}, [])


	//TODO: to be deleted after calculation of players from team object
	const randomNumberFromRange = (min, max) => {
		return Math.round(Math.random() * (max-min+1) + min )
	}

	//TODO: just for debug, replace with the correct players calculated from team object (ie. team.footballPlayers)
	const getRandomPlayers = () => {
		//get players from api
		const apiPlayers = Object.values(Players.GetPlayers())
		
		const size = apiPlayers.length
		console.log("[Dashboard - useEffect] - size", size)
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
			// console.log("[panGestureEvent - Dashboard] - translateY=", translateY.value)
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


	const totalSpent = () => {
		//calculate totale spent as a sum of the values of budgetSpent
		const totalSpent = budgetSpent?.reduce(
			(accumulator, currentValue) =>  accumulator + currentValue.value, 0)
		totalSpent === undefined ? 0 : totalSpent
		return totalSpent
	}

	const totalRemaining = league.budget - totalSpent()

	const maxPlayers = league.goalkeepers + league.defenders + league.midfielders + league.strikers

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

					{/* CHART SECTION */}
					<View style={styles.budgetCard}>
						<PieChart 
							maxValue={league.budget}
							totalSpent={totalSpent()}
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

