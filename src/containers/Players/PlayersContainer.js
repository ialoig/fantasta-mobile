import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { FlatList, ScrollView, Text, View } from "react-native"
import { Badge, Header, InputText } from "../../components"
import { ROLE_CLASSIC, ROLE_CLASSIC_DISPLAY_SHORT, ROLE_MANTRA, ROLE_MANTRA_DISPLAY_SHORT } from "../../constants"
import { Leagues, Players } from "../../services"
import { commonStyle } from "../../styles"
import colors from "../../styles/colors"
import PlayerList from "./PlayerList"
import styles from "./styles"


function PlayersContainer() {

	//define list of players to show
	const [players, setPlayers] = useState(null)
	//define list of All players from API
	const [allPlayers, setAllPlayers] = useState(null)
	//define the active player role to show on page
	const [activeRole, setActiveRole] = useState(ROLE_CLASSIC.all)
	//query is the text searched by user
	const [query, setQuery] = useState("")

	const [roles, setRoles] = useState(ROLE_CLASSIC)
	const [league, setLeague] = useState(Leagues.GetActiveLeague())

	useEffect( () => {
		console.log("PlayersContainer - [useEffect] - activeRole=", activeRole)

		const apiLeague =  Leagues.GetActiveLeague()
		setLeague(apiLeague)
		setRoles(league.type === "classic" ? ROLE_CLASSIC : ROLE_MANTRA)

		console.log("PlayersContainer - [useEffect] - players=", players)
		console.log("PlayersContainer - [useEffect] - roles=", roles)
		console.log("PlayersContainer - [useEffect] - league=", league)

		if (activeRole === ROLE_CLASSIC.all) {
			defaultList()
		} else if (activeRole === "none" && query != "") {
			handleSearch(query)
		} else {
			filterByRole(activeRole)
		}

	}, [activeRole, query, roles])



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
		console.log("PlayersContainer - [useEffect] - n. players =", size)
		let sortedList = players.sort(highPriceToLow)
		
		setPlayers(sortedList)
	}


	const filterByRole = (role) => {
		let filteredList = allPlayers.filter((player) => {
			const { roleClassic, roleMantra } = player
			if (roleClassic === role || roleMantra === role) {
				return true
			}
			return false
		})
		const size = filteredList.length
		console.log("PlayersContainer - [filterByRole] - role= "+role+", n. players=", size)
		setQuery("")
		setPlayers(filteredList)
		setActiveRole(role)
	}


	const highPriceToLow = (playerA, playerB) => {
		if (playerA.initialPrice > playerB.initialPrice) {
			return -1
		} else 
			return 1
	}


	//define a badge button as active or not. It change the background color
	const isActive = (role) => {
		if (activeRole === role) {
			return true
		}
		return false
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


	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>
			<Header title="players" />

			<InputText 
				id="search"
				label="Search"
				placeholder="Search"
				value={query}
				onChange={(id, value) => {
					setQuery(value)
					setActiveRole("none")
				}}
			/> 


			{/* itearating through the roles to get filters */}
			<View style={styles.badges}>
				<ScrollView 
					contentContainerStyle={[styles.scrollContent]}
					bounces
					horizontal
					showsHorizontalScrollIndicator={false}
				>
					{
						Object.entries(roles).map(([key, value]) => {
							return (
								<Badge 
									key={key}
									onPress={() => setActiveRole(value)}
									title={roles[value]}
									active={isActive(value)}
									activeColor={colors[key]}
								/>
							)
						})
					}
				</ScrollView>
			</View>

			{/* Rendering list of players */}
			<PlayerList 
				players={players}
				isClassic={league.type === "classic" ? true : false}
			/>

		</View>
	)
}


export default PlayersContainer