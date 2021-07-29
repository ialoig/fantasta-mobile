import { useNavigation } from "@react-navigation/native"
import React, { useEffect, useRef, useState } from "react"
import { View } from "react-native"
import Animated, { 
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler, 
	useAnimatedStyle, 
	useSharedValue,
} from "react-native-reanimated"
import { Header } from "../../components"
import { ROLE_CLASSIC, ROLE_MANTRA } from "../../constants"
import { Leagues, Players } from "../../services"
import { commonStyle } from "../../styles"
import { snap } from "../../utils/animationUtils"
import { getHeaderHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import PlayerList from "./PlayerList"
import RolesFilter from "./RolesFilter"
import SearchBox from "./SearchBox"
import styles from "./styles"

const INPUT_HEIGHT = dynamicHeight(327, 48)
const BADGE_HEIGHT = 40
const HEADER_HEIGHT = getHeaderHeight()
const FILTER_HEIGHT = INPUT_HEIGHT + BADGE_HEIGHT + HEADER_HEIGHT // total height of filter view

const snapPoints = [FILTER_HEIGHT, 0]

function PlayersContainer() {

	//define list of players to show
	const [players, setPlayers] = useState(null)
	//define list of All players from API
	const [allPlayers, setAllPlayers] = useState(null)
	//define the active player role to show on page
	const [activeRoles, setActiveRoles] = useState([ROLE_CLASSIC.ALL])
	//query is the text searched by user
	const [query, setQuery] = useState("")

	//shared value to store all the scroll Y values
	const translateY = useSharedValue(0)
	const flatRef = useRef(null)

	const [roles, setRoles] = useState(ROLE_CLASSIC)
	const [league, setLeague] = useState(Leagues.GetActiveLeague())
	const [isClassic, setIsClassic] = useState(true)
	//navigation route
	const { goBack }  = useNavigation()

	
	useEffect( () => {
		console.log("PlayersContainer - [useEffect] - activeRoles=", activeRoles)

		const apiLeague =  Leagues.GetActiveLeague()
		setLeague(apiLeague)
		setRoles(league.type === "classic" ? ROLE_CLASSIC : ROLE_MANTRA)
		setIsClassic(league.type === "classic" ? true : false)

		if (activeRoles.includes(ROLE_CLASSIC.ALL)) {
			defaultList()
		} else if (activeRoles.includes("none") && query != "") {
			handleSearch(query)
		} 
		else if (activeRoles.includes("none") && !query) {
			//setting role to default
			setActiveRoles([ROLE_CLASSIC.ALL])
		}
		else {
			filterByRole(activeRoles)
		}

	}, [activeRoles, query])


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
			// removing ALL and "none" value if a different role has been pressed
			const cleanActiveRole = activeRoles.filter( (item) => item != ROLE_CLASSIC.ALL && item != "none")
			if (cleanActiveRole.length > 0)
				setActiveRoles([...cleanActiveRole, role])
			else 
				setActiveRoles([role])
		}

		
		if (flatRef.current && players) {
			flatRef.current.scrollToIndex(
				{ 
					index: 0,
					animated: true,
				})
		}
	}


	const handleChangeQuery = (value) => {
		setQuery(value)
		setActiveRoles(["none"])
	}


	const scrollHandler = useAnimatedScrollHandler({
		onScroll: (event) => {
			translateY.value = event.contentOffset.y
		}
	})

	const handleEndDrag = ({ nativeEvent }) => {
		const { contentOffset, velocity } = nativeEvent
		const snapValue = snap(contentOffset.y, velocity.y, snapPoints[0], snapPoints[1])

		if (contentOffset.y < snapPoints[0] && contentOffset.y >= snapPoints[1] ) {
			flatRef.current.scrollToOffset({ offset: snapValue })
		}
	}

	const transformSyle = useAnimatedStyle( () => {
		let transformValue = interpolate(translateY.value, 
			[0, FILTER_HEIGHT],
			[0, -(HEADER_HEIGHT - BADGE_HEIGHT)],
			Extrapolate.CLAMP 
		)

		return {
			transform: [
				{ 
					translateY: transformValue
				}
			]
		}
	})

	const opacitySyle = useAnimatedStyle( () => {
		const opacityValue = interpolate(translateY.value, 
			[0, HEADER_HEIGHT],
			[1, 0],
			Extrapolate.CLAMP 
		)
		
		return {
			opacity: opacityValue
		}
	})
	

	// https://eveningkid.medium.com/animated-and-react-native-scrollviews-de701f1b1ce5
	// https://medium.com/swlh/making-a-collapsible-sticky-header-animations-with-react-native-6ad7763875c3
	// https://blog.expo.io/implementation-complex-animation-in-react-native-by-example-search-bar-with-tab-view-and-collapsing-68bb43be2dcb

	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			<Animated.View style={[styles.playerContainer, transformSyle]}>
				<Animated.View style={opacitySyle} >
					<SearchBox 
						query={query}
						changeQuery={handleChangeQuery}
					/>
				</Animated.View>

				{/* Roles filter buttons */}
				<RolesFilter 
					roles={roles}
					onPress={handlePressFilter}
					isActive={isActive}
				/>

				{/* Rendering list of players */ }
				<PlayerList 
					ref={flatRef}
					players={players}
					isClassic={isClassic}
					onScroll={scrollHandler}
					onScrollEnd={handleEndDrag}
				/>
			</Animated.View>

			{/* it is defined as latest component cause it must be over the others */}
			<Header 
				title="players" 
				leftButton
				iconTypeLeft="back"
				onPressLeft={() => goBack() }
			/>
		</View>
	)
}


export default PlayersContainer