import { useIsFocused } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { Badge, Card, Header } from "../../components"
import { ROLE_CLASSIC, ROLE_CLASSIC_DISPLAY } from "../../constants"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import colors from "../../styles/colors"
import styles from "./styles"


const PLAYERS_LIMIT_PER_PAGE = 600



function PlayersContainer() {

	//define list of players
	const [players, setPlayers] = useState(null)
	//define list of All players from API
	const [allPlayers, setAllPlayers] = useState(null)
	//define active role to show on page
	const [activeRole, setActiveRole] = useState(ROLE_CLASSIC.all)
	//define if page is focused or not
	const isFocused = useIsFocused()

	useEffect( () => {
		//setting active role as ALL to show always all players
		setActiveRole(ROLE_CLASSIC.all)

		const apiPlayers = Players.Get()
		let players = Object.values(apiPlayers)

		//setting all players retrieved from api
		setAllPlayers(players)

		const size = players.length
		console.log("PlayersContainer - [useEffect] - n. players =", size)
		console.log("PlayersContainer - [useEffect] - activeRole =", activeRole)
		
		if (size > PLAYERS_LIMIT_PER_PAGE) {
			console.log("PlayersContainer - [useEffect] - ", PLAYERS_LIMIT_PER_PAGE, " players")
			let reducedList = players.slice(0, PLAYERS_LIMIT_PER_PAGE).sort(highPriceToLow)
			
			setPlayers(reducedList)
		} else {
			console.log("PlayersContainer - [useEffect] - show all players")
			let reducedList = players.sort(highPriceToLow)
			setPlayers(reducedList)
		}
	}, [isFocused])


	const resetDefaultList = () => {
		//setting active role as ALL to show always all players
		setActiveRole(ROLE_CLASSIC.all)
		setPlayers(allPlayers)
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
		setPlayers(filteredList)
		setActiveRole(role)
	}

	const highPriceToLow = (playerA, playerB) => {
		if (playerA.initialPrice > playerB.initialPrice) {
			return -1
		} else 
			return 1
	}

	const isActive = (role) => {
		if (activeRole === role){
			console.log("PlayersContainer - [isActive]=true, role=", role)
			return true
		}
		return false
	}

	return (
		<View style={styles.container}>
			<Header title="players" />
			
			<View style={styles.badges}>
				<Badge 
					onPress={() => resetDefaultList()}
					title={ROLE_CLASSIC_DISPLAY.all}
					active={isActive(ROLE_CLASSIC.all)}
					activeColor={colors.secondary}
				/>
				<Badge 
					onPress={() => filterByRole(ROLE_CLASSIC.por)}
					title={ROLE_CLASSIC_DISPLAY.por}
					active={isActive(ROLE_CLASSIC.por)}
					activeColor={colors.por}
				/>
				<Badge 
					onPress={() => filterByRole(ROLE_CLASSIC.dif)}
					title={ROLE_CLASSIC_DISPLAY.dif}
					active={isActive(ROLE_CLASSIC.dif)}
					activeColor={colors.dif}
				/>
				<Badge 
					onPress={() => filterByRole(ROLE_CLASSIC.cen)}
					title={ROLE_CLASSIC_DISPLAY.cen}
					active={isActive(ROLE_CLASSIC.cen)}
					activeColor={colors.cen}
				/>
				<Badge 
					onPress={() => filterByRole(ROLE_CLASSIC.att)}
					title={ROLE_CLASSIC_DISPLAY.att}
					active={isActive(ROLE_CLASSIC.att)}
					activeColor={colors.att}
				/>
			</View>

			<View style={styles.list}>
				<FlatList 
					data={players}
					keyExtractor={player => player.id.toString()}
					renderItem={PlayerCard}
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

Players.propTypes = {

}

export default PlayersContainer



const PlayerCard = ({ item }) => {
	return (
		<Card 
			icon="role"
			role={item.roleClassic}
			title={item.name}
			description={item.initialPrice}
			type="small"
		/>
	)
}

PlayerCard.propTypes = {
	item: PropTypes.object.isRequired
}