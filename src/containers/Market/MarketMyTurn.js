import { useRoute } from "@react-navigation/core"
import I18n from "i18n-js"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Countdown from "../../components/Countdown/Countdown"
import PlayersComp from "../../components/Players/PlayersComp"
import { Players } from "../../services"
import { textStyles } from "../../styles"
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
		<View style={styles.container}>

			<View style={styles.countdown_container}>
				<Text style={textStyles.h2}>
					{I18n.translate("remaining_time")}
				</Text>
				<Countdown 
					minutes={0}
					seconds={10}
					type={"default"}
				/>
			</View>


			<Text style={textStyles.h2}>
				{I18n.translate("player_selected")}
			</Text>
			
			{/* Rendering list of players */ }
			<PlayersComp 
				players={players}
				playerSelectable={true}
			/>
            

		</View>
	)
}

MarketMyTurn.propTypes = {

}

export default MarketMyTurn

