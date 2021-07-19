import React, { useEffect, useRef, useState } from "react"
import { Animated, ScrollView, View } from "react-native"
import { Extrapolate } from "react-native-reanimated"
import { Badge, Header, InputText } from "../../components"
import { ROLE_CLASSIC, ROLE_MANTRA } from "../../constants"
import { Leagues, Players } from "../../services"
import { commonStyle } from "../../styles"
import { getHeaderHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import PlayerList from "./PlayerList"
import styles from "./styles"

const INPUT_HEIGHT = dynamicHeight(327, 56)
const BADGE_HEIGHT = 32
const HEADER_HEIGHT = getHeaderHeight()
const HEADER_SNAP = HEADER_HEIGHT + INPUT_HEIGHT + BADGE_HEIGHT

function PlayersContainer() {

	//define list of players to show
	const [players, setPlayers] = useState(null)
	//define list of All players from API
	const [allPlayers, setAllPlayers] = useState(null)
	//define the active player role to show on page
	const [activeRoles, setActiveRoles] = useState([ROLE_CLASSIC.ALL])
	//query is the text searched by user
	const [query, setQuery] = useState("")


	const [roles, setRoles] = useState(ROLE_CLASSIC)
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [isClassic, setIsClassic] = useState(true)

	const { Value, event } = Animated

	const scrollY = useRef(new Value(0)).current

	
	useEffect( () => {
		console.log("PlayersContainer - [useEffect] - activeRoles=", activeRoles)

		const apiLeague =  Leagues.GetActiveLeague()
		setLeague(apiLeague)
		setRoles(league.type === "classic" ? ROLE_CLASSIC : ROLE_MANTRA)
		setIsClassic(league.type === "classic" ? true : false)

		// console.log("PlayersContainer - [useEffect] - players=", players)
		// console.log("PlayersContainer - [useEffect] - roles=", roles)
		// console.log("PlayersContainer - [useEffect] - league=", league)

		if (activeRoles.includes(ROLE_CLASSIC.ALL)) {
			defaultList()
		} else if (activeRoles.includes("none") && query != "") {
			handleSearch(query)
		} 
		else {
			filterByRole(activeRoles)
		}

	}, [activeRoles, query, roles])



	const defaultList = () => {
		//get players from api
		const apiPlayers = Players.GetPlayers()
		let players = Object.values(apiPlayers)
		//sort players high price to low
		sortList(players)
		//setting all players retrieved from api
		setAllPlayers(players)
		//query value should be reset to default
		setQuery("")
	}

	const sortList = (players) => {
		const size = players.length
		console.log("PlayersContainer - [sortList] - n. players =", size)
		let sortedList = players.sort(highPriceToLow)
		
		setPlayers(sortedList)
	}


	const filterByRole = (roles) => {
		let filteredList = allPlayers.filter((player) => {
			const { roleClassic, roleMantra } = player
			// filtering by classic roles
			if (isClassic ){
				return roles.some( (role) => roleClassic.includes(role))
			} 
			// case 1 - filtering by mantra roles
			else if (!isClassic) {
				return roles.some( (role) => roleMantra.includes(role))
			}
			return false
		})
		const size = filteredList.length
		console.log("PlayersContainer - [filterByRole] - role= "+roles+", n. players=", size)
		setQuery("")
		setPlayers(filteredList)
	}

	const highPriceToLow = (playerA, playerB) => {
		if (playerA.initialPrice > playerB.initialPrice) {
			return -1
		} else 
			return 1
	}


	//define a badge button as active or not. It change the background color
	const isActive = (role) => {
		return activeRoles.includes(role)
	}


	const handleSearch = (text) => {
		const query = text.toLowerCase()
		console.log("PlayersContainer - [handleSearch] - query=", query)
		const results = allPlayers.filter((player) => {
			const { name, team } = player
			if (name.toLowerCase().includes(query) || team.toLowerCase().includes(query)) {
				return true
			}
			return false
		})
		setQuery(query)
		setPlayers(results)
	}

	const handlePressFilter = (role) => {
		if (role === ROLE_CLASSIC.ALL && !activeRoles.includes(role)) {
			setActiveRoles([role])
		}
		// case 0 - removing role: means that filter button has been pressed twice
		else if (activeRoles.includes(role)) {
			console.log("PlayersContainer - [handlePressFilter] - removing role=", role)
			const cleanActiveRole = activeRoles.filter( (item) => item != role)
			if (cleanActiveRole.length === 0) 
				setActiveRoles([ROLE_CLASSIC.ALL])
			else 
				setActiveRoles(cleanActiveRole)
		} 
		// case 1 - adding role to active roles array
		else {
			console.log("PlayersContainer - [handlePressFilter] - added role=", role)
			// removing ALL value if a different role has been pressed
			const cleanActiveRole = activeRoles.filter( (item) => item != ROLE_CLASSIC.ALL)
			if (cleanActiveRole.length > 0)
				setActiveRoles([...cleanActiveRole, role])
			else 
				setActiveRoles([role])
		}
	}


	const handleScroll = event(
		[
			{ 
				nativeEvent: { 
					contentOffset: { 
						y: scrollY 
					} 
				} 
			}
		],
		{ useNativeDriver: true }
	)

	const translateY = scrollY.interpolate({
		inputRange: [0, HEADER_SNAP],
		outputRange: [0, -(HEADER_HEIGHT - BADGE_HEIGHT)],
		extrapolate: Extrapolate.CLAMP
	})


	const imageOpacity = scrollY.interpolate({
		inputRange: [0, HEADER_HEIGHT + BADGE_HEIGHT],
		outputRange: [1, 0],
		extrapolate: Extrapolate.CLAMP
	})

	// https://eveningkid.medium.com/animated-and-react-native-scrollviews-de701f1b1ce5
	// https://medium.com/swlh/making-a-collapsible-sticky-header-animations-with-react-native-6ad7763875c3
	// https://stackoverflow.com/questions/65072596/react-native-trying-to-hide-search-bar-on-scroll
	// https://blog.expo.io/implementation-complex-animation-in-react-native-by-example-search-bar-with-tab-view-and-collapsing-68bb43be2dcb

	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>
			<Header title="players" />

			<Animated.View style={{ transform: [{ translateY }]}}>
				<Animated.View style={{ opacity: imageOpacity }}>
					<InputText 
						id="search"
						label="Search"
						placeholder="Search"
						value={query}
						onChange={(id, value) => {
							setQuery(value)
							setActiveRoles(["none"])
						}}
					/> 
				</Animated.View>


				{/* itearating through the roles to get filters */}
				<Animated.View style={styles.badges}>
					<ScrollView 
						bounces
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{
							roles && Object.entries(roles).map(([key, value]) => {
								return (
									<Badge 
										key={key}
										onPress={() => handlePressFilter(key)}
										title={value}
										active={isActive(key)}
									/>
								)
							})
						}
					</ScrollView>
				</Animated.View>

				{/* Rendering list of players */ }
				<PlayerList 
					players={players}
					isClassic={isClassic}
					onScroll={handleScroll}
				/>
			</Animated.View>

		</View>
	)
}


export default PlayersContainer