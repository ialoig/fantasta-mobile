import { useIsFocused, useNavigation } from "@react-navigation/native"
import I18n from "i18n-js"
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { Badge, Header, InputText, PlayerCard } from "../../components"
import { ROLE_CLASSIC, ROLE_CLASSIC_DISPLAY_SHORT } from "../../constants"
import routes from "../../navigation/routesNames"
import { Players } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import colors from "../../styles/colors"
import { getHeaderHeight } from "../../utils/deviceUtils"
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
	//define if page is focused or not
	const isFocused = useIsFocused()
	//navigation route
	const { navigate }  = useNavigation()

	useEffect( () => {
		console.log("PlayersContainer - [useEffect] - activeRole=", activeRole)

		if (activeRole === ROLE_CLASSIC.all) {
			defaultList()
		} else if (activeRole === "none" && query != "") {
			handleSearch(query)
		} else {
			filterByRole(activeRole)
		}

	}, [activeRole, query])



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
			if (player.roleClassic === role) {
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

			<View style={styles.badges}>
				<Badge 
					onPress={() => setActiveRole(ROLE_CLASSIC.all)}
					title={ROLE_CLASSIC_DISPLAY_SHORT[ROLE_CLASSIC.all]}
					active={isActive(ROLE_CLASSIC.all)}
					activeColor={colors.secondary}
				/>
				<Badge 
					onPress={() => setActiveRole(ROLE_CLASSIC.por)}
					title={ROLE_CLASSIC_DISPLAY_SHORT[ROLE_CLASSIC.por]}
					active={isActive(ROLE_CLASSIC.por)}
					activeColor={colors.por}
				/>
				<Badge 
					onPress={() => setActiveRole(ROLE_CLASSIC.dif)}
					title={ROLE_CLASSIC_DISPLAY_SHORT[ROLE_CLASSIC.dif]}
					active={isActive(ROLE_CLASSIC.dif)}
					activeColor={colors.dif}
				/>
				<Badge 
					onPress={() => setActiveRole(ROLE_CLASSIC.cen)}
					title={ROLE_CLASSIC_DISPLAY_SHORT[ROLE_CLASSIC.cen]}
					active={isActive(ROLE_CLASSIC.cen)}
					activeColor={colors.cen}
				/>
				<Badge 
					onPress={() => setActiveRole(ROLE_CLASSIC.att)}
					title={ROLE_CLASSIC_DISPLAY_SHORT[ROLE_CLASSIC.att]}
					active={isActive(ROLE_CLASSIC.att)}
					activeColor={colors.att}
				/>
			</View>

			
			<View style={styles.list}>
				<FlatList 
					data={players}
					keyExtractor={player => player.id.toString()}
					renderItem={(player) => 
						<PlayerCard
							type="small"
							name={player.item.name}
							role={player.item.roleClassic}
							team={player.item.team}
							quotation={player.item.initialPrice}
							onPress={() => 
								navigate(routes.PLAYER_DETAILS, {
									id: player.item.id
								})}
						/>
					}
					ListEmptyComponent={() => { 
						return (
							<Text style={textStyles.description}>
								{I18n.translate("noPlayersFound")}
							</Text>) 
					}}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}


export default PlayersContainer