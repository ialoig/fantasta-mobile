import { useIsFocused } from "@react-navigation/native"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native"
import { Card, Header } from "../../components"
import { Players } from "../../services"
import { textStyles } from "../../styles"
import styles from "./styles"


const PLAYERS_LIMIT_PER_PAGE = 600

function PlayersContainer() {

	const [players, setPlayers] = useState(null)
	const isFocused = useIsFocused()

	useEffect( () => {
		const apiPlayers = Players.Get()

		let players = Object.values(apiPlayers)
		const size = players.length
		console.log("n. players =", size)
		
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


	const filterByRole = (player, role) => {
		if (player.roleClassic === role) {
			return true
		}
		return false
	}

	const highPriceToLow = (playerA, playerB) => {
		if (playerA.initialPrice > playerB.initialPrice) {
			return -1
		} else 
			return 1
	}

	const lowPriceToHigh = (playerA, playerB) => {
		if (playerA.initialPrice > playerB.initialPrice) {
			return 1
		} else 
			return -1
	}

	return (
		<View style={styles.container}>
			<Header title="players" />
			
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