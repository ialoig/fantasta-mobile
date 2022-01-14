import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Countdown from "../../components/Countdown/Countdown"
import PlayersComponent from "../../components/Players/PlayersComponent"
import { Players } from "../../services"
import { commonStyle, textStyles } from "../../styles"
import styles from "./styles"

function MarketMyTurn(props) {

	//define list of players to show
	const [players, setPlayers] = useState([])

	
	useEffect( () => {
		defaultList()
	}, [])


	const defaultList = () => {
		//get players from api
		const apiPlayers = Players.getPlayers()
		let players = Object.values(apiPlayers)
		
		//setting all players retrieved from api
		setPlayers(players)
	}


	return (
		<View style={[styles.container, commonStyle.paddingHeader]}>

			<View style={styles.countdown_container}>
				<Text style={textStyles.h2}>
					{I18n.translate("remaining_time")}
				</Text>
				<Countdown 
					minutes={2}
					seconds={0}
					type={"default"}
				/>
			</View>

			<View style={styles.playersList}>

				<Text style={textStyles.description}>
					{I18n.translate("player_selection")}
				</Text>
			
				{/* Rendering list of players */ }
				<PlayersComponent 
					players={players}
					playerSelectable={true}
				/>
			</View>
            

		</View>
	)
}

MarketMyTurn.propTypes = {

}

export default MarketMyTurn

