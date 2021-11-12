import PropTypes from "prop-types"
import React, { useEffect, useRef, useState } from "react"
import Animated, { 
	Extrapolate,
	interpolate,
	useAnimatedScrollHandler, 
	useAnimatedStyle, 
	useSharedValue,
} from "react-native-reanimated"
import { ROLE_CLASSIC, ROLE_MANTRA } from "../../constants"
import { Leagues } from "../../services"
import { snap } from "../../utils/animationUtils"
import { getHeaderHeight } from "../../utils/deviceUtils"
import { dynamicHeight } from "../../utils/pixelResolver"
import SearchBox from "../Search/SearchBox"
import PlayerList from "./PlayerList"
import RolesFilter from "./RolesFilter"

const INPUT_HEIGHT = dynamicHeight(327, 48)
const BADGE_HEIGHT = 40
const HEADER_HEIGHT = getHeaderHeight()
const FILTER_HEIGHT = INPUT_HEIGHT + BADGE_HEIGHT + HEADER_HEIGHT // total height of filter view

const snapPoints = [FILTER_HEIGHT, 0]

/**
 * 
 * Render a list of objects with a search box on top of the view, which disappear when list is scrolled.
 * 
 * @param {players} array list of object
 * @param {searchBoxShown} boolean define if search box must be shown
 * @param {searchBoxSticky} boolean define is search box must be fixed on top
 * @returns 
 */
function PlayersComp({ players, searchBoxShown, searchBoxSticky }) {

	//define list of filterdPlayers to show
	const [filterdPlayers, setFilterdPlayers] = useState(null)
	//define the active player role to show on page
	const [activeRoles, setActiveRoles] = useState([ROLE_CLASSIC.ALL])
	//query is the text searched by user
	const [query, setQuery] = useState("")

	//shared value to store all the scroll Y values
	const translateY = useSharedValue(0)
	const flatRef = useRef(null)

	const [roles, setRoles] = useState(ROLE_CLASSIC)
	const [league, setLeague] = useState(Leagues.getActiveLeague())
	const [isClassic, setIsClassic] = useState(true)

	
	useEffect( () => {
		console.log("[PlayersComp - useEffect] - activeRoles=", activeRoles)

		const apiLeague =  Leagues.getActiveLeague()
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

	}, [players, activeRoles, query])


	const defaultList = () => {
		//sort players high price to low
		sortList(players)
		//query value should be reset to default
		setQuery("")
	}

	const sortList = (players) => {
		const size = players.length
		console.log("[PlayersComp - sortList] - n. players =", size)
		let sortedList = players.sort(highPriceToLow)
		
		setFilterdPlayers(sortedList)
	}


	const filterByRole = (roles) => {
		let filteredList = players.filter((player) => {
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
		console.log("[PlayersComp - filterByRole] - role= "+roles+", n. players=", size)
		setQuery("")
		setFilterdPlayers(filteredList)
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
		console.log("[PlayersComp - handleSearch] - query=", query)
		const results = players.filter((player) => {
			const { name, team } = player
			if (name.toLowerCase().includes(query) || team.toLowerCase().includes(query)) {
				return true
			}
			return false
		})
		setQuery(query)
		setFilterdPlayers(results)
	}

	const handlePressFilter = (role) => {
		if (role === ROLE_CLASSIC.ALL && !activeRoles.includes(role)) {
			setActiveRoles([role])
		}
		// case 0 - removing role: means that filter button has been pressed twice
		else if (activeRoles.includes(role)) {
			console.log("[PlayersComp - handlePressFilter] - removing role=", role)
			const cleanActiveRole = activeRoles.filter( (item) => item != role)
			if (cleanActiveRole.length === 0)
				setActiveRoles([ROLE_CLASSIC.ALL])
			else 
				setActiveRoles(cleanActiveRole)
		} 
		// case 1 - adding role to active roles array
		else {
			console.log("[PlayersComp - handlePressFilter] - added role=", role)
			// removing ALL and "none" value if a different role has been pressed
			const cleanActiveRole = activeRoles.filter( (item) => item != ROLE_CLASSIC.ALL && item != "none")
			if (cleanActiveRole.length > 0)
				setActiveRoles([...cleanActiveRole, role])
			else 
				setActiveRoles([role])
		}

		
		if (flatRef.current && filterdPlayers && filterdPlayers.length > 0) {
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

		//transformation should be enabled only if search box is visible
		if (searchBoxShown && !searchBoxSticky) {
			return {
				transform: [
					{ 
						translateY: transformValue
					}
				]
			}
		} else 
			return {}
	})

	const opacitySyle = useAnimatedStyle( () => {
		const opacityValue = interpolate(translateY.value, 
			[0, HEADER_HEIGHT],
			[1, 0],
			Extrapolate.CLAMP 
		)
		if (searchBoxShown && !searchBoxSticky) {
			return {
				opacity: opacityValue
			}
		} else return {}

	})
	

	// https://eveningkid.medium.com/animated-and-react-native-scrollviews-de701f1b1ce5
	// https://medium.com/swlh/making-a-collapsible-sticky-header-animations-with-react-native-6ad7763875c3
	// https://blog.expo.io/implementation-complex-animation-in-react-native-by-example-search-bar-with-tab-view-and-collapsing-68bb43be2dcb

	return (
		<>
			<Animated.View style={transformSyle}>
				{				
					searchBoxShown && <Animated.View style={opacitySyle} >
						<SearchBox 
							query={query}
							changeQuery={handleChangeQuery}
						/>
					</Animated.View>
				}

				{/* Roles filter buttons */}
				<RolesFilter 
					roles={roles}
					onPress={handlePressFilter}
					isActive={isActive}
				/>

				{/* Rendering list of players */ }
				<PlayerList 
					ref={flatRef}
					players={filterdPlayers}
					isClassic={isClassic}
					onScroll={scrollHandler}
					onScrollEnd={handleEndDrag}
				/>
			</Animated.View>

		</>
	)
}

PlayersComp.propTypes = {
	players: PropTypes.array.isRequired,
	searchBoxShown: PropTypes.bool,
	searchBoxSticky: PropTypes.bool,
}

PlayersComp.defaultProps = {
	players: [],
	searchBoxShown: true,
	searchBoxSticky: false
}

export default PlayersComp